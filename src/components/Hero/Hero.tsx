import {
  HeroContainer,
  HeroContent,
  HeroGirl,
  HeroTitle,
  GirlShadow,
  GirlContainer,
  DiagramContainer,
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
      <DiagramContainer>
        <Diagram
          svgTitle="#graph1"
          title="Spacewalks"
          graph={[
            { width: "5.9375rem", height: "3.0625rem", iconName: "graph2" },
            { width: "2.9375rem", height: "2.9375rem", iconName: "graph3" },
          ]}
        />
        <Diagram
          svgTitle="#graph4"
          title="Exercising"
          graph={[
            { width: "7.8125rem", height: "1.8125rem", iconName: "graph5" },
          ]}
        />
      </DiagramContainer>
    </HeroContainer>
  );
};
