import styled from "styled-components";
import herobgx1 from "../../assets/images/Hero/herobg@x1.jpg";

export const HeroContainer = styled.section`
  margin: 1.625rem auto;
  background-image: url(${herobgx1});
  background-size: cover;
  min-height: 23.812rem;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${herobgx1.replace("x1", "x2")});
  }
`;
export const HeroContent = styled.div``;
export const HeroImage = styled.img``;
export const HeroTitle = styled.h1`
  font-size: 2rem;
  max-width: 18.93rem;
  padding: 2rem 3rem 2rem 1.5rem;
`;
