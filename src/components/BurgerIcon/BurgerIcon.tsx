import icons from "../../assets/icon/icon.svg";
import { BurgerSvg } from "./BurgerIcon.styled";

interface Props {
  width: number;
  height: number;
  onClick?: () => void;
}

export const BurgerIcon = ({ width, height, onClick }: Props) => {
  return (
    <BurgerSvg width={width} height={height} onClick={onClick}>
      <use href={`${icons}#burger2`} />
    </BurgerSvg>
  );
};
