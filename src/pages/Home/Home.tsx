import { HomeContainer } from "../../App.styled";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Hero />
    </HomeContainer>
  );
};
export default Home;
