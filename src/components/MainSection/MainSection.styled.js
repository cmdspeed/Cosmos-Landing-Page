import styled from "styled-components";
import { laptopView, tabletView } from "../../helpers/resposive-views";

export const MainHeading = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  color: var(--btn-bg-color);
  margin: 0 auto;
  @media screen and (min-width: ${tabletView}) {
    font-size: 2.5rem;
    max-width: 23.4375rem;
    margin-top: 1rem;
  }
`;

export const StyledSection = styled.section`
  margin-top: 4.375rem;
  padding: 0 1.5rem;
  @media screen and (min-width: ${laptopView}) {
    display: flex;
  }
`;

export const StyledList = styled.ul`
  margin-top: 2.5rem;
  @media screen and (min-width: ${tabletView}) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  @media screen and (min-width: ${laptopView}) {
    margin-top: 0;
  }
`;

export const StyledListItem = styled.li`
  @media screen and (min-width: ${tabletView}) {
    max-width: 15.75rem;
  }
`;
