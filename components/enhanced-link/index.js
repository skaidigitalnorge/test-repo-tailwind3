import Link from "next/link";

export const EnhancedLink = ({ type, slug, children }) => {
  const hrefBuilder = () => {
    switch (type) {
      case "page":
        return `/${slug}`;
      case "product":
        return `/products/${slug}`;
      case "collection":
        return `/collections/${slug}`;
    }
  };

  const InternalLink = ({ children }) => {
    return <Link href={hrefBuilder()}>{children}</Link>;
  };

  return (
    <InternalLink>
      <a className="cursor-pointer">{children}</a>
    </InternalLink>
  );
};
