import { Layout, Grid, GridItem, FourFourSix } from "../../1_Small/Base";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <Layout>
        <Grid>
          <FourFourSix c="mt-52">Okstind</FourFourSix>
          <FourFourSix c="mt-82 mb-66">
            <div className="flex flex-col">
              <div className="flex justify-end text-medium">
                <a
                  className="flex justify-end mb-8 items-center navBorderBot"
                  href="https://www.instagram.com/maritaelgheim/"
                  target="blank"
                >
                  {/* //! Legg inn instagram-ikon til høyre for tekst */}
                  <span className="text-p mr-8">Instagram</span>
                  {Instagram}
                </a>
              </div>
              <div className="flex justify-end">
                <a
                  href="mailto:marita_elgheim@outlook.com"
                  className="navBorderBot text-p mb-8 noUnderline flex items-center"
                >
                  <span className="mr-8">Send Okstind en mail</span>
                  {Mail}
                </a>
              </div>
              <div>
                <a
                  className="flex justify-end mb-8"
                  href="https://www.skaidigital.no"
                  target="blank"
                >
                  <span className="navBorderBot text-p">
                    {" "}
                    Nettside fra SKAI Digital
                  </span>
                </a>
              </div>
            </div>
          </FourFourSix>
        </Grid>
      </Layout>
    </footer>
  );
};

const Instagram = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-instagram"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Mail = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-mail"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
