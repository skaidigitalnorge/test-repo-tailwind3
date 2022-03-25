import { Container, Grid } from "../utils/base";
import { LinkBlock } from "./link-block";

export const Footer = ({ data }) => {
  const FooterUnderlineLinks = () => {
    return (
      <div className="mt-32 flex py-8 text-neutral-500">
        <a
          href="https://skaidigital.no/"
          className="border-1 border-1 border-neutral-100"
        >
          Nettside utviklet av Skai Digital
          <span className="mx-8">|</span>
        </a>
        <a className="">Personvern</a>
      </div>
    );
  };

  return (
    <footer className="">
      <Container>
        <Grid>
          <LinkBlock data={data.blocks[0]} />
          <LinkBlock data={data.blocks[1]} />
          <LinkBlock data={data.blocks[2]} />
          <LinkBlock data={data.blocks[3]} />
        </Grid>
        <FooterUnderlineLinks />
      </Container>
    </footer>
  );
};
