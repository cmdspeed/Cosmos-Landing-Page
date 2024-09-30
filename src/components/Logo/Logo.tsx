import Odyssey from "../../assets/images/Odyssey.webp";

export const Logo = ({ width = 8, height = 1.25 }) => {
  return (
    <img
      src={Odyssey}
      style={{ width: `${width}rem`, height: `${height}rem` }}
      alt="Cosmos Logo"
    />
  );
};
