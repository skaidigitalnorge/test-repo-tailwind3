import { createContext, useContext, useLayoutEffect, useState } from "react";

const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

export const useIsDesktop = () => {
  const breakpoint = 1024;
  const { width } = useViewport();

  return width >= breakpoint ? true : false;
};
