import icon from "../../assets/icon/icon.svg";
import { StyledParagraph, StyledSVG, StyledTile } from "./MainCard.styled";

interface Props {
  iconName: string;
  title: string;
  paragraph: string;
}

export const MainCard = ({ iconName, title, paragraph }: Props) => {
  return (
    <>
      <StyledSVG>
        <use href={`${icon}#${iconName}`} />
      </StyledSVG>
      <StyledTile>{title}</StyledTile>
      <StyledParagraph>{paragraph}</StyledParagraph>
    </>
  );
};
