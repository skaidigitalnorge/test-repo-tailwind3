export const toCamelCase = (string) => {
  if (string != null) {
    const firstLetter = string.charAt(0).toUpperCase();
    const restOfLetters = string.substring(1);
    const fullName = firstLetter + restOfLetters;
    return fullName;
  } else return "";
};
