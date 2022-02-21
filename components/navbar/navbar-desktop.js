import Link from "next/link";
import { Layout } from "../utils/base";

export const NavbarDesktop = () => {
  return (
    <Layout>
      <div className="flex justify-between bg-white my-24">
        <div className="self-center ">
          <Link href="/">
            <a>
              <p className="text-h3 font-semibold flex mb-0 ">Logo</p>
            </a>
          </Link>
        </div>
        <div className="text-label text-dark font-medium flex self-center">
          <Link href="/">
            <a className="ml-32 mb-0 nav">Hjem</a>
          </Link>
          <Link href="/meny">
            <a className="ml-32 mb-0 nav">Menyen</a>
          </Link>
          <Link href="/om-oss">
            <a className="ml-32 mb-0 nav">Om oss</a>
          </Link>
          <Link href="/kontakt">
            <a className="ml-32 mb-0 nav">Kontakt</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
