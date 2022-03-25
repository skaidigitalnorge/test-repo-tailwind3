import client from "@sanity/client";

// Document type for all incoming synced Shopify products
const SHOPIFY_PRODUCT_DOCUMENT_TYPE = "product";

// Prefix added to all Sanity product document ids
const SHOPIFY_PRODUCT_DOCUMENT_ID_PREFIX = "product-";

// Enter your Sanity studio details here.
// You will also need to provide an API token with write access in order for this
// handler to be able to create documents on your behalf.
// Read more on auth, tokens and securing them: https://www.sanity.io/docs/http-auth
// const sanityClient = client({
//   apiVersion: "2021-10-21",
//   dataset: process.env.SANITY_DATASET,
//   projectId: process.env.SANITY_PROJECT_ID,
//   token: process.env.SANITY_ADMIN_AUTH_TOKEN,
//   useCdn: false,
// });
const sanityClient = client({
  apiVersion: "2021-03-25",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token:
    "skvAc1RNcYnP5j2e6aX2CtJJ9VKU6IUUxfiZy9hoxDuY3gntfwX5UqmLWOBnucUDRslNLCsvc6hd1FEDJ3pG4aiHoRiV1RwE4r3vFXHuMpmDABTOEOYpYbySSAtQq3S7xlJ53JOaxEmEIk5nTjTZGNs5xjrD0SILEdQ6FP6xmWCD3vkDCn6W",
  useCdn: false,
});

/**
 * Sanity Connect sends POST requests and expects both:
 * - a 200 status code
 * - a response header with `content-type: application/json`
 */
export default async function handler(req, res) {
  // Next.js will automatically parse `req.body` with requests of `content-type: application/json`,
  // so manually parsing with `JSON.parse` is unnecessary.
  const { body, method } = req;

  // Ignore non-POST requests
  if (method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const transaction = sanityClient.transaction();
    switch (body.action) {
      case "create":
      case "update":
        await createOrUpdateProducts(transaction, body.products);
        break;
      case "delete":
        const documentIds = body.productIds.map((id) =>
          getDocumentProductId(id)
        );
        await deleteProducts(transaction, documentIds);
        break;
      case "sync":
        await syncProducts(transaction, body.products);
        break;
    }
    await transaction.commit();
  } catch (err) {
    console.error("Transaction failed: ", err.message);
  }

  res.status(200).json({ message: "OK" });
}

/**
 * Creates (or updates if already existing) Sanity documents of type `shopify.product`.
 * Patches existing drafts too, if present.
 *
 * All products will be created with a deterministic _id in the format `product-${SHOPIFY_ID}`
 */
async function createOrUpdateProducts(transaction, products) {
  // Extract draft document IDs from current update
  const draftDocumentIds = products.map((product) => {
    const productId = extractIdFromGid(product.id);
    return `drafts.${getDocumentProductId(productId)}`;
  });

  // Determine if drafts exist for any updated products
  const existingDrafts = await sanityClient.fetch(`*[_id in $ids]._id`, {
    ids: draftDocumentIds,
  });

  products.forEach((product) => {
    // Build Sanity product document
    const document = buildProductDocument(product);
    const draftId = `drafts.${document._id}`;

    // Create (or update) existing published document
    transaction
      .createIfNotExists(document)
      .patch(document._id, (patch) => patch.set(document));

    // Check if this product has a corresponding draft and if so, update that too.
    if (existingDrafts.includes(draftId)) {
      transaction.patch(draftId, (patch) =>
        patch.set({
          ...document,
          _id: draftId,
        })
      );
    }
  });
}

/**
 * Delete corresponding Sanity documents of type `shopify.product`.
 * Published and draft documents will be deleted.
 */
async function deleteProducts(transaction, documentIds) {
  documentIds.forEach((id) => {
    transaction.delete(id).delete(`drafts.${id}`);
  });
}

/**
 * Creates (or updates if already existing) Sanity documents of type `shopify.product`.
 * Patches existing drafts too, if present.
 *
 * Warning: this will also delete removed Shopify products from your dataset.
 */
async function syncProducts(transaction, products) {
  // Fetch all current product document ids
  const existingDocumentIds = await sanityClient.fetch(
    `*[_type == $productType && !(_id in path('drafts.**'))]._id`,
    { productType: SHOPIFY_PRODUCT_DOCUMENT_TYPE }
  );

  // Get all incoming sync document IDs and determine which products have since been deleted
  const incomingDocumentIds = products.map((product) => {
    const productId = extractIdFromGid(product?.id);
    return getDocumentProductId(productId);
  });
  const deletedDocumentIds = existingDocumentIds.filter(
    (id) => !incomingDocumentIds.includes(id)
  );

  // Create / update new documents and delete unused ones
  await createOrUpdateProducts(transaction, products);
  await deleteProducts(transaction, deletedDocumentIds);
}

/**
 * Build Sanity document from product payload
 */
function buildProductDocument(product) {
  const {
    featuredImage,
    id,
    options,
    productType,
    priceRange,
    status,
    title,
    variants,
  } = product;
  const productId = extractIdFromGid(id);
  return {
    _id: getDocumentProductId(productId),
    _type: SHOPIFY_PRODUCT_DOCUMENT_TYPE,
    image: featuredImage?.src,
    options: options?.map((option, index) => ({
      _key: String(index),
      name: option.name,
      position: option.position,
      values: option.values,
    })),
    priceRange,
    productType,
    status,
    title,
    variants: variants?.map((variant, index) => {
      const variantId = extractIdFromGid(variant.id);
      return {
        _key: String(index),
        compareAtPrice: Number(variant.compareAtPrice || 0),
        id: variantId,
        inStock: !!variant.inventoryManagement
          ? variant.inventoryPolicy === "continue" ||
            variant.inventoryQuantity > 0
          : true,
        inventoryManagement: variant.inventoryManagement,
        inventoryPolicy: variant.inventoryPolicy,
        inventoryQuantity: variant.inventoryQuantity || 0,
        option1: variant?.selectedOptions?.[0]?.value,
        option2: variant?.selectedOptions?.[1]?.value,
        option3: variant?.selectedOptions?.[2]?.value,
        price: Number(variant.price || 0),
        sku: variant.sku,
        title: variant.title,
      };
    }),
  };
}

/**
 * Extract ID from Shopify GID string (all values after the last slash)
 * e.g. gid://shopify/Product/12345 => 12345
 */
function extractIdFromGid(gid) {
  return gid?.match(/[^\/]+$/i)[0];
}

/**
 * Map Shopify product ID number to a corresponding Sanity document ID string
 * e.g. 12345 => product-12345
 */
function getDocumentProductId(productId) {
  return `${SHOPIFY_PRODUCT_DOCUMENT_ID_PREFIX}${productId}`;
}
