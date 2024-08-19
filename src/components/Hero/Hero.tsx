import {
  HeroContainer,
  HeroContent,
  HeroGirl,
  HeroTitle,
  GirlShadow,
  GirlContainer,
} from "./Hero.styled";
import spacegirlx1 from "../../assets/images/Hero/space-girl@x1.png";
import { Diagram } from "./Diagram/Diagram";

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
      <Diagram
        svgTitle="#graph1"
        title="Spacewalks"
        graph={[
          { width: "95px", height: "49px", iconName: "graph2" },
          { width: "47px", height: "47px", iconName: "graph3" },
        ]}
      />
    </HeroContainer>
  );
};
