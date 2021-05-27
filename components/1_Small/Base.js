import Image from "next/image";

// TODO: Add the path for the cloudinary account for this project
const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/skai-digital/image/upload/q_auto/${src}`;
};
export const Bilde = ({ src, alt, w, h, c, layout, of, op }) => {
  return (
    <Image
      className={c}
      objectFit={of}
      objectPosition={op}
      src={src}
      alt={alt}
      width={w}
      height={h}
      loader={myLoader}
      layout={layout}
    />
  );
};

// !
// ! Containers and sections
// !
export const SectionContainer = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center py-80 md:py-120 lg:py-160 `;
  return (
    <section id={id} className={klassenavn}>
      {children}
    </section>
  );
};
export const Section160 = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center py-80 md:py-120 lg:py-160`;
  return (
    <section id={id} className={klassenavn}>
      {children}
    </section>
  );
};
export const Section80 = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center py-80`;
  return (
    <section id={id} className={klassenavn}>
      {children}
    </section>
  );
};
export const Section40 = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center py-40`;
  return (
    <section id={id} className={klassenavn}>
      {children}
    </section>
  );
};

export const Section0 = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center`;
  return (
    <section id={id} className={klassenavn}>
      {children}
    </section>
  );
};

export const HeroContainer = ({ children, id, farge, pt, c }) => {
  const klassenavn = `bg-${farge} mx-auto align-center pb-80 ${c} pt-40 md:pb-120 md:pt-56 lg:pb-240 lg:pt-80 `;
  return (
    <section id={id} className={klassenavn}>
      {children}
    </section>
  );
};

export const SameContainer = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center pt-40 md:pt-56 lg:pt-80 pb-40 md:pb-56 lg:pb-80`;
  return (
    <section id={id} className={klassenavn}>
      <Element name={id}>{children}</Element>
    </section>
  );
};

export const HeroContainerUtenPadding = ({ children, id, farge, pt }) => {
  const klassenavn = `bg-${farge} mx-auto align-center `;
  return (
    <section id={id} className={klassenavn}>
      {children}
    </section>
  );
};

export const Layout = ({ children, c }) => {
  return (
    <div
      className={`container mx-auto w-screen md:max-w lg:max-w xl:max-w ${c}`}
    >
      <div className="max-w-95 mx-auto align-center">{children}</div>
    </div>
  );
};

// !
// ! Grid related items
// !
export const Grid = ({ children, c }) => {
  const klasseNavn = `grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-24 auto-rows-auto ${c}`;
  return <div className={klasseNavn}>{children}</div>;
};

export const GridItem = ({ c, children, id }) => {
  return (
    <div key={id} className={c}>
      {children}
    </div>
  );
};

export const FET = ({ c, children, id }) => {
  return (
    <div key={id} className={`${c} col-span-4 md:col-span-8 lg:col-span-12`}>
      {children}
    </div>
  );
};
