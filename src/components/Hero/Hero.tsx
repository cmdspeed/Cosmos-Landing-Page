import {
  HeroContainer,
  HeroContent,
  HeroGirl,
  HeroTitle,
  GirlShadow,
  GirlContainer,
  DiagramContainer,
  TimerInSpace,
} from "./Hero.styled";
import { Diagram } from "./Diagram/Diagram";

import spacegirlx1 from "../../assets/images/Hero/space-girl@x1.png";
import spacegirlx2 from "../../assets/images/Hero/space-girl@x2.png";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Unveiling the Wonders of the Universe</HeroTitle>
      </HeroContent>
      <GirlContainer>
        <GirlShadow></GirlShadow>
        <HeroGirl
          src={`${spacegirlx1}`}
          srcSet={`${spacegirlx2} 2x`}
          alt="Space Girl"
        />
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
            { width: "7.7156rem", height: "1.8125rem", iconName: "graph5" },
          ]}
        />
      </DiagramContainer>
      <TimerInSpace
        svgTitle="#timeIcon"
        title="Total time in space "
        bgColor="--bg-color-diagram"
      >
        <span> 352D 5H 49M 20S</span>
      </TimerInSpace>
    </HeroContainer>
  );
};
