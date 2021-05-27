import { useEffect, useState } from "react";

// TODO: Use this when making a component where you toggle something (on/off)
export const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
};

// TODO: Use when creating a component and closing it when clicking outside it (modal)
export const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
