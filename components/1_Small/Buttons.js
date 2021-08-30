import Link from "next/link";

// TODO: Primary button that you use in the project
export const PrimaryButton = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className="justify-center bg-cta border-2 border-cta text-hvit font-semibold p-16 primaryButton flex w-0100 md:w-auto noUnderline">
        {text}
      </a>
    </Link>
  );
};

// TODO: Secondary button is for any CTA besides the main CTA
export const SecondaryButton = ({ text, href, farge }) => {
  return (
    <Link href={href}>
      <a
        className={`justify-center text-${farge} border-2 border-${farge} font-semibold p-16 secondaryButton flex w-0100 md:w-auto noUnderline`}
      >
        {text}
      </a>
    </Link>
  );
};
