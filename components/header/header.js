import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";
import { useIsDesktop } from "../hooks/ViewportProvider";

const Header = ({ data }) => {
  const isDesktop = useIsDesktop();

  const Desktop = () => {
    return <HeaderDesktop data={data} />;
  };

  const Mobile = () => {
    return <HeaderMobile data={data} />;
  };

  return isDesktop ? <Desktop /> : <Mobile />;
};

export default Header;
