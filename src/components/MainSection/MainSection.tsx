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
              iconName="play"
              title="Astronomy 101"
              paragraph="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."
            />
          </li>
        </StyledList>
      </StyledSection>
    </main>
  );
};
