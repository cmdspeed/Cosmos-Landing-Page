import styled from "styled-components";
import herobgx1 from "../../assets/images/Hero/herobg@x1.jpg";
import herobgx2 from "../../assets/images/Hero/herobg@x2.jpg";
import { NavLink } from "react-router-dom";
import { laptopView, tabletView } from "../../helpers/resposive-views";

export const HeroContainer = styled.section`
  margin: 1.625rem auto 18.5rem;
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
    background-image: url(${herobgx2});
  }
  @media screen and (min-width: ${laptopView}) {
    margin: 3.125rem auto 1.5rem;
    max-width: 59.1875rem;
    border-radius: 2.5rem;
  }
`;

export const HeroContent = styled.div`
  position: relative;
`;

export const HeroGirl = styled.img``;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  max-width: 22rem;
  font-weight: 800;
  padding: 2rem 3rem 1.5rem 1.5rem;
  @media screen and (min-width: ${laptopView}) {
    padding: 2.5rem 0 0 2.5rem;
    font-size: 2.5rem;
  }
`;

export const GirlShadow = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  border-radius: 50%;
  width: 121px;
  height: 300px;
  background: var(--shadow);
  opacity: 0.8;
  filter: blur(4rem);

  z-index: -1;
`;

export const GirlContainer = styled.div`
  position: absolute;

  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: ${laptopView}) {
    left: 59%;
    top: 41.5%;
    transform: translateY(-50%);
  }
`;

export const DiagramContainer = styled.div`
  display: flex;
  margin: 8.1875rem auto;
  position: absolute;

  left: 0;
  right: 0;
  width: max-content;

  & > div:first-of-type {
    margin-top: 4.875rem;
    margin-right: 0.375rem;
  }
  @media screen and (min-width: ${laptopView}) {
    left: 31rem;
    top: 13rem;
    & > div:first-of-type {
      margin-top: 4.1875rem;
      margin-right: 3rem;
    }
  }
`;

export const TimerInSpace = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  top: 25.4375rem;
  & div {
    max-width: fit-content;

    & span {
      padding: 19px 0 0 44px;
      letter-spacing: 0.5rem;
      font-weight: 800;
    }
  }
  @media screen and (min-width: ${laptopView}) {
    top: 20.3rem;
    left: 77%;
    transform: translateX(-50%);
    max-width: 25.5rem;
  }
`;

export const HeroDescriptionContainer = styled.section`
  position: relative;
  max-width: 20.4375rem;
  margin: 0 auto;
  @media screen and (min-width: ${laptopView}) {
    margin: 0 2.5rem;
    max-width: 24.6875rem;
  }
`;

export const HeroDescription = styled.h1`
  color: var(--hero-text-color);
  line-height: 1.625;
  font-weight: 500;
`;

export const GetStarted = styled.div`
  margin-top: 1.5rem;
  @media screen and (min-width: ${laptopView}) {
    margin-top: 0;
  }
`;

export const StyledLinkWatchVideo = styled(NavLink)`
  color: var(--dark-text-color);
  font-size: 1.25rem;
  font-weight: 600;

  display: flex;
  align-items: center;

  margin-top: 2.4375rem;
  transition: opacity 0.3s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media screen and (min-width: ${laptopView}) {
    margin-top: 0;
  }
`;

export const PlayContainer = styled.div`
  margin-left: 0.75rem;
`;

export const PlaySvgContainer = styled.svg`
  background-color: var(--diagram-color);
  padding: 0.625rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
`;

export const BtnWrapper = styled.div`
  padding: 0 1.5rem;
  @media screen and (min-width: ${laptopView}) {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;
