import { MainCard } from "./MainCard";
import { MainHeader, StyledList, StyledSection } from "./MainSection.styled";

export const MainSection = () => {
  return (
    <main>
      <StyledSection>
        <MainHeader>
          Join our vibrant community of space enthusiasts where you can
        </MainHeader>
        <StyledList>
          <li>
            <MainCard
              iconName="astronomy"
              title="Astronomy 101"
              paragraph="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."
            />
          </li>
          <li>
            <MainCard
              iconName="latest-discoveries"
              title="Latest Discoveries"
              paragraph="Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration."
            />
          </li>
          <li>
            <MainCard
              iconName="space-exploration"
              title="Space Exploration"
              paragraph="Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations."
            />
          </li>
          <li>
            <MainCard
              iconName="space-technology"
              title="Space Technology"
              paragraph="Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems."
            />
          </li>
        </StyledList>
      </StyledSection>
    </main>
  );
};
