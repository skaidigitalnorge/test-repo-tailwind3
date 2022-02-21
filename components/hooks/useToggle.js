import { useState } from "react";
// TODO: Use this when making a component where you toggle something (on/off)
export const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
};
