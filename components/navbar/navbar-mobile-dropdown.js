import { useState } from "react";
import { useRouter } from "next/router";
import { m } from "framer-motion";
import { EnhancedLink } from "../enhanced-link";

export const NavbarMobileDropdown = ({ data, onClick }) => {
  const { title, dropdown } = data;

  console.log("data i dropdown moile");
  console.log(data);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const dropdownAnim = {
    open: {
      opacity: 1,
      height: "auto",
    },
    closed: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className=""
      >
        <span>dropdown icon</span>
        {title}
        <m.div
          //   id={`dropdown-${id}`}
          className="dropdown--content"
        >
          <ul>
            {dropdown.map((item, key) => {
              return (
                <m.li
                  initial={isOpen ? "open" : "closed"}
                  animate={isOpen ? "open" : "closed"}
                  variants={dropdownAnim}
                  transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
                  key={key}
                  className={`${isOpen ? "relative ml-2 block pl-[10px]" : ""}`}
                >
                  <EnhancedLink type={item.page.type} slug={item.page.slug}>
                    {item.title}
                  </EnhancedLink>
                </m.li>
              );
            })}
          </ul>
        </m.div>
      </button>
    </div>
  );
};
