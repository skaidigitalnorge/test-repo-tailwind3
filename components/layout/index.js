import { m } from "framer-motion";
import { Footer } from "../footer";

import { Navbar } from "../navbar/index";

// Variables for page transition
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: pageTransitionSpeed / 1000,
      delay: 0.2,
      ease: "linear",
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: pageTransitionSpeed / 1000,
      ease: "linear",
      when: "beforeChildren",
    },
  },
};
// TODO
// Adde schema
// Adde faktisk data

export const Layout = ({ site = {}, page = {}, schema, children }) => {
  return (
    <>
      <m.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        style={headerHeight ? { "--headerHeight": `${headerHeight}px` } : null}
      >
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
      </m.div>
    </>
  );
};
