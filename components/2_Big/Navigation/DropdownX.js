import { FourFourThree, Grid, Layout } from "../../1_Small/Base";
import Link from "next/link";

const NavSubLink = ({ href, children, iconLeft }) => {
  return (
    <Link href={href}>
      <a className="text-body_medium font-medium text-neutral_700 flex animateSmooth">
        <span className="animateUnderline">
          {iconLeft != null ? <span className="mr-8">{iconLeft}</span> : null}{" "}
          {children}
        </span>
      </a>
    </Link>
  );
};

const NavHeaderLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="text-neutral_700 font-medium text-body_regular mb-8">
        {children}
      </a>
    </Link>
  );
};

export const DropdownX = () => {
  return (
    <div className="my-16">
      <Grid>
        <FourFourThree c="row-start-1">
          <div className="flex flex-col">
            <NavHeaderLink href="">Herreklær</NavHeaderLink>
            <NavSubLink iconLeft="Icon" href="">
              Kjoler
            </NavSubLink>
            <NavSubLink href="">T-skjorter</NavSubLink>
            <NavSubLink href="">Bukser</NavSubLink>
            <NavSubLink href="">Noe annet</NavSubLink>
          </div>
        </FourFourThree>
        <FourFourThree>
          <div className="flex flex-col">
            <NavHeaderLink href="">Dameklær</NavHeaderLink>
            <NavSubLink href="">Kjoler</NavSubLink>
            <NavSubLink href="">T-skjorter</NavSubLink>
            <NavSubLink href="">Bukser</NavSubLink>
            <NavSubLink href="">Noe annet</NavSubLink>
          </div>
        </FourFourThree>
        <FourFourThree>Last thing</FourFourThree>
        <FourFourThree>Last thing</FourFourThree>
      </Grid>
    </div>
  );
};
