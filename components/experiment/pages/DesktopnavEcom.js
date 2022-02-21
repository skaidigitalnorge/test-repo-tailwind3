import { Layout } from "../../1_Small/Base";
import Link from "next/link";
import { useRef, useState } from "react";
import { DropdownX } from "./DropdownX";
import { useOutsideClick } from "../../1_Small/Hooks";

export const DesktopnavEcom = () => {
  const [openKlaer, setOpenKlaer] = useState(false);
  const ref = useRef();
  const klaerMeny = () => {
    setOpenKlaer(!openKlaer);
  };
  useOutsideClick(ref, () => {
    setOpenKlaer(!openKlaer);
  });
  const openDropdownKlaer = (
    <div ref={ref}>
      <DropdownX />
    </div>
  );
  const closeDropdwnKlaer = <div className="hidden"></div>;
  return (
    <Layout>
      <div className="">
        <div className="text-label text-dark font-medium flex self-center">
          <div className="">
            <button
              className="focus:outline-none my-8 text-body_large "
              onClick={() => klaerMeny()}
            >
              Klær
            </button>
          </div>
        </div>
      </div>
      <div className={openKlaer ? "animateDropdown" : null}>
        {openKlaer ? openDropdownKlaer : closeDropdwnKlaer}
      </div>
    </Layout>
  );
};
