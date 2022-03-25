import { EnhancedLink } from "../enhanced-link";
import { Container } from "../utils/base";

export const HeaderDesktop = ({ data }) => {
  console.log("Header desktop data");
  console.log(data);

  const Styling = ({ children }) => {
    return (
      <div className="text-paragraph-regular bg-[#f3f3f3] p-8">{children}</div>
    );
  };

  const WithLink = () => {
    return (
      <EnhancedLink type={data.link._type} slug={data.link.slug}>
        <span className="underline">{data.title}</span>
      </EnhancedLink>
    );
  };

  const NoLink = () => {
    return <>{data.title}</>;
  };

  return (
    <Styling>
      <Container c="flex items-center">
        {data.link?.slug ? <WithLink /> : <NoLink />}
      </Container>
    </Styling>
  );
};
