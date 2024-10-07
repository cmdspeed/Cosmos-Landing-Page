import styled from "styled-components";
import { laptopView, pcView, tabletView } from "../../helpers/resposive-views";

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
  @media screen and (min-width: ${pcView}) {
    font-size: 4rem;
    max-width: 35.8125rem;
  }
`;

export const StyledSection = styled.section`
  margin-top: 4.375rem;
  padding: 0 1.5rem;
  @media screen and (min-width: ${laptopView}) {
    display: flex;
    gap: 1rem;
  }
  @media screen and (min-width: ${pcView}) {
    display: flex;
    gap: 15.5rem;
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
  @media screen and (min-width: ${pcView}) {
    gap: 6.5rem;
  }
`;

export const StyledListItem = styled.li`
  @media screen and (min-width: ${tabletView}) {
    max-width: 15.75rem;
  }
  @media screen and (min-width: ${pcView}) {
    max-width: 21rem;
  }
`;
