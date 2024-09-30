import styled from "styled-components";
import { laptopView } from "../../../helpers/resposive-views";

export const DiagramElement = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const DiagramSvg = styled.svg`
  background-color: var(--diagram-color);
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 0.75rem;
  @media screen and (min-width: ${laptopView}) {
    padding: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export const DiagramTitle = styled.h1`
  margin-left: 0.75rem;
  font-size: 0.875rem;
  @media screen and (min-width: ${laptopView}) {
    font-size: 1.125rem;
  }
`;

export const GraphSvg = styled.svg`
  margin-right: 0.375rem;
  &:last-child {
    margin-right: 0;
  }
`;
interface DiagramWrapperProps {
  bgcolor?: string;
}

export const DiagramWrapper = styled.div<DiagramWrapperProps>`
  background-color: ${({ bgcolor }) =>
    bgcolor ? `var(${bgcolor})` : `var(--main-text-color)`};
  color: ${({ bgcolor }) =>
    bgcolor ? "var(--main-text-color)" : "var(--dark-text-color)"};

  max-width: 10.75rem;
  height: fit-content;

  border-radius: 1.5rem;

  padding: 0.67rem;

  position: relative;
  @media screen and (min-width: ${laptopView}) {
    max-width: 15.93rem;
    padding: 1.25rem;
  }
`;

export const GraphWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;
