import { FourFourFour } from "../utils/base";

export const USPDesktop = ({ data }) => {
  const USPItemDesktop = ({ children }) => {
    return (
      <FourFourFour>
        <div className="border-1 border-neutral-50 text-center">{children}</div>
      </FourFourFour>
    );
  };

  const MapData = () => {
    return data?.map((item, key) => {
      return (
        <USPItemDesktop key={key}>
          <div className="flex flex-col items-center">
            {item.icon}
            <p className="pt-8">{item.text}</p>
          </div>
        </USPItemDesktop>
      );
    });
  };

  return <MapData />;
};
