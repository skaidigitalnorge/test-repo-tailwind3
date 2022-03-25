import { EnhancedLink } from "../enhanced-link";
import { FourFourThree } from "../utils/base";
import { FooterHeading } from "./footer-heading";

export const LinkBlock = ({ data }) => {
  const { title, items } = data;

  return (
    <FourFourThree>
      <FooterHeading>{title}</FooterHeading>
      {items?.map((item, key) => {
        return (
          <EnhancedLink key={key} type={item.page.type} slug={item.page.slug}>
            {item.title}
          </EnhancedLink>
        );
      })}
    </FourFourThree>
  );
};
