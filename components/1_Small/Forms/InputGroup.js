export const InputGroup = ({ name, labelTxt, type, required, iconLeft }) => {
  return (
    <div className="relative z-0 w-100 mb-8">
      <input
        required={required != null ? true : null}
        type={type}
        name={name}
        id={name}
        placeholder=" "
        className="pb-2 pt-4 block w-100 px-0 mt-0 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-neutral_900 border-neutral_300 bg-transparent floatingInput"
      />
      <label
        htmlFor={name}
        className="absolute duration-300 top-0  origin-0 text-neutral_700 cursor-text"
      >
        {iconLeft != null ? <span className="mr-8">{iconLeft}</span> : null}
        {labelTxt}
      </label>
    </div>
  );
};
