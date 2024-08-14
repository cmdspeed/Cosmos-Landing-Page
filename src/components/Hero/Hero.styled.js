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

export const HeroContent = styled.div`
  position: relative;
`;

export const HeroGirl = styled.img``;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  max-width: 18.93rem;
  padding: 2rem 3rem 1.5rem 1.5rem;
`;

export const GirlShadow = styled.div`
  position: absolute;
  top: 30%;
  left: 38%;
  border-radius: 50%;
  width: 121px;
  height: 300px;
  background: #63757c;
  opacity: 0.8;
  filter: blur(3rem);

  z-index: -2;
`;

export const GirlContainer = styled.div`
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
`;
