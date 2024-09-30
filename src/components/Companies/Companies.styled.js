import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { laptopView, pcView } from "../../helpers/resposive-views";

export const CompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 3rem;

  padding: 1.5rem;
  width: 100%;
  margin-top: 4.375rem;
  @media (min-width: 375px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1.5rem;
  }
  @media screen and (min-width: ${laptopView}) {
    gap: 5.625rem;
  }
  @media screen and (min-width: ${pcView}) {
    gap: 15.3125rem;
    margin-top: 7.4375rem;
  }
`;

export const SpaceXLink = styled(NavLink)`
  height: 1.5rem;
  width: 9.236875rem;
  margin: 0 auto;
  &:hover {
    opacity: 0.8;
  }
`;
export const BoeingLink = styled(NavLink)`
  height: 1.5rem;
  width: 9.695rem;
  margin: 0 auto;
  &:hover {
    opacity: 0.8;
  }
`;
export const NasaLink = styled(NavLink)`
  height: 1.5rem;
  width: 5.51625rem;
  margin: 0 auto;
  &:hover {
    opacity: 0.8;
  }
`;
export const AstroscaleLink = styled(NavLink)`
  height: 1.5rem;
  width: 5.50625rem;
  margin: 0 auto;
  &:hover {
    opacity: 0.8;
  }
`;
