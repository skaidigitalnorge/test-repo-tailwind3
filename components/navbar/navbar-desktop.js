import Link from "next/link";
import { EnhancedLink } from "../enhanced-link";
import { Container } from "../utils/base";
import { NavbarDesktopItem } from "./navbar-desktop-item";

export const NavbarDesktop = ({ data }) => {
  const NavbarDesktopLink = ({ data }) => {
    return (
      <NavbarDesktopItem>
        <EnhancedLink type={data.page.type} slug={data.page.slug}>
          {data.title}
        </EnhancedLink>
      </NavbarDesktopItem>
    );
  };

  const NavbarDesktopDropdown = ({ data }) => {
    const { dropdown } = data;

    return <></>;
  };

  const MapNavbarItems = () => {
    return data?.items?.map((item, key) => {
      return item._type == "navPage" ? (
        <NavbarDesktopLink data={item} key={key} />
      ) : (
        <NavbarDesktopDropdown data={item} key={key} />
      );
    });
  };

  const NavbarLogo = () => {
    return (
      <div className="self-center ">
        <Link href="/">
          <a>
            <p className="text-h3 mb-0 flex font-semibold ">Logo</p>
          </a>
        </Link>
      </div>
    );
  };

  const NavbarCart = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    );
  };

  return (
    <Container>
      <div className="my-8 flex justify-between bg-white">
        <div className="flex">
          <NavbarLogo />
          <div className="ml-32 flex">
            <MapNavbarItems />
          </div>
        </div>
        <NavbarCart />
      </div>
    </Container>
  );
};
