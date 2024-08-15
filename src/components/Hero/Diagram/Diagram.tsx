import {
  DiagramElement,
  DiagramSvg,
  DiagramTitle,
  GraphSvg,
  DiagramWrapper,
  GraphWrapper,
} from "./Diagram.styled";

import icon from "../../../assets/icon/icon.svg";

export const Diagram = () => {
  return (
    <DiagramWrapper>
      <DiagramElement>
        <DiagramSvg>
          <use href={`${icon}#graph1`} />
        </DiagramSvg>
        <DiagramTitle>Spacewalks</DiagramTitle>
      </DiagramElement>
      <GraphWrapper>
        <GraphSvg width="95px" height="49px">
          <use href={`${icon}#graph2`} />
        </GraphSvg>
        <GraphSvg width="47px" height="47px">
          <use href={`${icon}#graph3`} />
        </GraphSvg>
      </GraphWrapper>
    </DiagramWrapper>
  );
};
