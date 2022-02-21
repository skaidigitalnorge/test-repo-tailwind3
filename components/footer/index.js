import { Grid, Layout, SectionNav } from "../utils/base";

export const Footer = () => {
  return (
    <footer className="">
      <SectionNav
        id="footer-main-content"
        c="border-1 border-t border-b border-neutral_200"
      >
        <Layout>
          <Grid c="border border-1">footer</Grid>
        </Layout>
      </SectionNav>
      <Layout>
        <div className="py-8 flex text-neutral_500">
          <a
            href="https://skaidigital.no/"
            className="border-1 border-1 border-neutral_100"
          >
            Nettside utviklet av Skai Digital
            <span className="mx-8">|</span>
          </a>
          <a className="">Personvern</a>
        </div>
      </Layout>
    </footer>
  );
};
