import { Desktopnav } from "./Desktopnav";
import { Mobilenav } from "./Mobilenav";

export const Navbar = () => {
  return (
    <>
      <nav className="lg:hidden bg-white shadow-shadow">
        <Mobilenav />
      </nav>
      <nav className="hidden lg:flex bg-white shadow-shadow">
        <Desktopnav />
      </nav>
    </>
  );
};
