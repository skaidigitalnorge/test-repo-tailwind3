import { Desktopnav } from "./Desktopnav";
import { DesktopnavEcom } from "./DesktopnavEcom";
import { Mobilenav } from "../navbar/navbar-mobile";

export const NavbarEcom = () => {
  return (
    <>
      <nav className="lg:hidden border-b border-1 border-neutral-200 mb-32">
        <Mobilenav />
      </nav>
      <nav className="hidden lg:flex border-b border-1 border-neutral-200 mb-32">
        <DesktopnavEcom />
      </nav>
    </>
  );
};
