import { MainCard } from "./MainCard";
import {
  MainHeading,
  StyledList,
  StyledListItem,
  StyledSection,
} from "./MainSection.styled";

export const MainSection = () => {
  return (
    <main>
      <StyledSection>
        <MainHeading>
          Join our vibrant community of space enthusiasts where you can
        </MainHeading>
        <StyledList>
          <StyledListItem>
            <MainCard
              iconName="astronomy"
              title="Astronomy 101"
              paragraph="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."
            />
          </StyledListItem>
          <StyledListItem>
            <MainCard
              iconName="latest-discoveries"
              title="Latest Discoveries"
              paragraph="Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration."
            />
          </StyledListItem>
          <StyledListItem>
            <MainCard
              iconName="space-exploration"
              title="Space Exploration"
              paragraph="Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations."
            />
          </StyledListItem>
          <StyledListItem>
            <MainCard
              iconName="space-technology"
              title="Space Technology"
              paragraph="Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems."
            />
          </StyledListItem>
        </StyledList>
      </StyledSection>
    </main>
  );
};
