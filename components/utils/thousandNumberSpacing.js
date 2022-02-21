export const thousandNumberSpacing = (input_string) => {
  return input_string != null
    ? input_string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    : 0;
};
