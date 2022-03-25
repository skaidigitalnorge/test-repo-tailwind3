import { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";

import { EnhancedLink } from "../enhanced-link";
import { Container } from "../utils/base";
import { NavbarMobileDropdown } from "./navbar-mobile-dropdown";

export const NavbarMobile = ({ data }) => {
  const [showMobilenav, setShowMobilenav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobilenav((prev) => !prev);
  };

  console.log("data i mobilenav");
  console.log(data);

  const SingleLink = ({ data }) => {
    const { title, page } = data;

    return (
      <EnhancedLink type={page.type} slug={page.slug}>
        {title}
      </EnhancedLink>
    );
  };

  const MapNavItems = () => {
    return data.items?.map((item, key) => {
      return (
        <li key={key}>
          {item.dropdown == null ? (
            <SingleLink data={item} />
          ) : (
            <NavbarMobileDropdown data={item} onClick={onClick} />
          )}
        </li>
      );
    });
  };

  const Banner = () => {
    return (
      <div className="text-lys flex justify-between">
        <Link href="/">
          <a>
            <p className="text-h3 mb-0 flex self-center font-semibold">
              Bliss Flowerbox
            </p>
          </a>
        </Link>
      </div>
    );
  };

  const ClosedNav = () => {
    return (
      <Container>
        <div className="flex items-center justify-between bg-white py-24">
          <Banner />
          <div
            className="strek flex self-center"
            onClick={() => setShowMobilenav(!showMobilenav)}
          >
            <Hamburger
              toggled={showMobilenav}
              toggle={setShowMobilenav}
              easing="ease-in"
              rounded
              label="Vis meny"
              hideOutline={false}
            />
          </div>
        </div>
      </Container>
    );
  };

  const OpenNav = () => {
    return (
      <Container>
        <div className="bg-light py-24 pb-56 ">
          <div className="flex items-center justify-between">
            <Banner />
            <div
              className="strek"
              onClick={() => setShowMobilenav(!showMobilenav)}
            >
              <Hamburger
                toggled={showMobilenav}
                toggle={setShowMobilenav}
                easing="ease-in"
                rounded
                label="Vis meny"
                hideOutline={false}
              />
            </div>
          </div>
          <ul className="mt-56 bg-neutral-100">
            <MapNavItems />
          </ul>
        </div>
      </Container>
    );
  };

  return showMobilenav ? <OpenNav /> : <ClosedNav />;
};
