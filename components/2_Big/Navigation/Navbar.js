import { Desktopnav } from "./Desktopnav";
import { Mobilenav } from "./Mobilenav";

export const Navbar = () => {
  return (
    <>
      <nav class="lg:hidden bg-white shadow-shadow">
        <Mobilenav />
      </nav>
      <nav class="hidden lg:flex bg-white shadow-shadow">
        <Desktopnav />
      </nav>
    </>
  );
};
