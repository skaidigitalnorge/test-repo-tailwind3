export const norwegianify = (string) => {
  const firstLetter = string.charAt(0).toUpperCase();

  const restOfLetters = string
    .substring(1)
    .replace(/ae/g, "aa")
    .replace(/å/g, "aa");
  const fullName = firstLetter + restOfLetters;

  // string.charAt(0).toUpperCase() +
  return string != null ? fullName.toLowerCase() : null;
};
