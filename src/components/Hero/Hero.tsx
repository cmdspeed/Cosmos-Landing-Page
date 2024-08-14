import {
  HeroContainer,
  HeroContent,
  HeroGirl,
  HeroTitle,
  GirlShadow,
  GirlContainer,
} from "./Hero.styled";
import spacegirlx1 from "../../assets/images/Hero/space-girl@x1.png";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Unveiling the Wonders of the Universe</HeroTitle>
      </HeroContent>
      <GirlContainer>
        <GirlShadow></GirlShadow>
        <HeroGirl src={`${spacegirlx1}`} />
      </GirlContainer>
    </HeroContainer>
  );
};
