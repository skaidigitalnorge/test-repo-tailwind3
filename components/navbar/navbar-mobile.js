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

<<<<<<< HEAD
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
            <NavbarMobileDropdown data={item} />
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
=======
  return (
    <>
      {/* {showMobilenav ? (
        <>
          <Layout>
            <div className="py-24 bg-light pb-56 ">
              <header className="flex justify-between text-lys  ">
                <div>
                  <Link href="/">
                    <a>
                      <p className="text-h3 font-semibold flex mb-0 self-center">
                        {storeNameOrLogo}
                      </p>
                    </a>
                  </Link>
                </div>
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
              </header>
              <ul className="mt-56">
                <Link href="/">
                  <li className="text-h1 font-semibold text-dark mt-16">
                    Hjem
                  </li>
                </Link>
                <Link href="/meny">
                  <li className="text-h1 font-semibold text-dark mt-16">
                    Menyen
                  </li>
                </Link>
                <Link href="/om-oss">
                  <li className="text-h1 font-semibold text-dark mt-16">
                    Om oss
                  </li>
                </Link>
                <Link href="/Kontakt">
                  <li className="text-h1 font-semibold text-dark mt-16">
                    Kontakt
                  </li>
                </Link>
                <Link href="#bookBord">
                  <li className="text-h1 font-semibold text-dark mt-16">
                    Book et bord
                  </li>
                </Link>
              </ul>
            </div>
          </Layout>
        </>
      ) : (
        <Layout>
          <div className="bg-white flex justify-between py-24">
            <p className="text-h3 font-semibold flex mb-0 self-center">
              {storeNameOrLogo}
>>>>>>> 6d382642d9019e73f0a6e62530904e92e20f24a4
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
<<<<<<< HEAD
          <ul className="mt-56 bg-neutral-100">
            <MapNavItems />
          </ul>
        </div>
      </Container>
    );
  };

  return showMobilenav ? <OpenNav /> : <ClosedNav />;
=======
        </Layout>
      )} */}
    </>
  );
>>>>>>> 6d382642d9019e73f0a6e62530904e92e20f24a4
};
