import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";
import { useIsDesktop } from "../hooks/ViewportProvider";

const Navbar = ({ data }) => {
  const { desktop, mobile } = data;
  const isDesktop = useIsDesktop();

  const Desktop = () => {
    return <NavbarDesktop data={desktop} />;
  };

  const Mobile = () => {
    return <NavbarMobile data={mobile} />;
  };

  return <nav>{isDesktop ? <Desktop /> : <Mobile />}</nav>;
};

export default Navbar;
