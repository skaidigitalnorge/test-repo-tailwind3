export const SchemaOrganization = ({}) => {
  const schema_data = {
    "@context": "http://schema.org",
    "@type": "Organization",
    email: "info(at)blissflowerbox.no",
    name: "Bliss Flowerbox",
    logo: {
      URL: `https://www.okstind.com/favicon.ico`,
    },
  };
  JSON.stringify(schema_data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_data) }}
    />
  );
};
