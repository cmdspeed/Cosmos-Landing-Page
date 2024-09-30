import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { laptopView } from "../../helpers/resposive-views";

export const FooterWrapper = styled.div`
  padding: 2rem 0 2.125rem 1.5rem;
`;

export const StyledLink = styled(NavLink)`
  color: var(--bg-color-diagram);

  font-weight: 600;
`;

export const ListItem = styled.li`
  margin-top: 1.5rem;
`;

export const StyledEmailLink = styled(NavLink)`
  color: var(--email-link);
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: underline;
`;

export const StyledList = styled.ul`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  @media screen and (min-width: ${laptopView}) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;
