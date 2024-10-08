import styled from "styled-components";
import {
  laptopView,
  mobileView,
  pcView,
  tabletView,
} from "./helpers/resposive-views";
export const HomeContainer = styled.div`
  margin: 1.62rem auto;
  max-width: ${mobileView};
  @media (min-width: ${tabletView}) {
    max-width: ${tabletView};
  }
  @media (min-width: ${laptopView}) {
    max-width: ${laptopView};
  }
  @media (min-width: ${pcView}) {
    max-width: ${pcView};
  }
`;
