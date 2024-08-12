import styled from "styled-components";

export const BurgerSvg = styled.svg`
  fill: black;
  &:hover {
    fill: var(--logo-color);
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
`;
