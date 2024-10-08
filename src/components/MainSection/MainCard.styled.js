import styled from "styled-components";
import { pcView } from "../../helpers/resposive-views";

export const StyledSVG = styled.svg`
  background-color: var(--diagram-color);
  padding: 0.875rem;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.75rem;
  @media screen and (min-width: ${pcView}) {
    width: 6.25rem;
    height: 6.25rem;
    padding: 1.87rem;
  }
`;

export const StyledTile = styled.h2`
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--bg-color-diagram);
  margin-top: 0.75rem;
  @media screen and (min-width: ${pcView}) {
    font-size: 1.5rem;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.71;
  color: var(--hero-text-color);
  margin-top: 0.5rem;
  @media screen and (min-width: ${pcView}) {
    font-size: 1.125rem;
    line-height: 1.83;
  }
`;
