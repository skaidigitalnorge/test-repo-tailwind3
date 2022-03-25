import { useIsDesktop } from "../hooks/ViewportProvider";
import { Container, Grid } from "../utils/base";
import { USPDesktop } from "./usp-desktop";
import { USPMobile } from "./usp-mobile";

const USP = ({}) => {
  const isDesktop = useIsDesktop();

  const data = [
    { text: "Free shipping over $250", icon: badge },
    { text: "Roses that last over a year", icon: badge },
    { text: "365-day guarantee", icon: badge },
  ];

  const Desktop = () => {
    return (
      <div className="bg-neutral-100">
        <Container c="py-16 my-16">
          <Grid>
            <USPDesktop data={data} />
          </Grid>
        </Container>
      </div>
    );
  };

  const Mobile = () => {
    return (
      <Container c="my-16">
        <USPMobile data={data} />
      </Container>
    );
  };

  return isDesktop ? <Desktop /> : <Mobile />;
};

const badge = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

export default USP;
