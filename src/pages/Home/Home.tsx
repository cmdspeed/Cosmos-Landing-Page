import { HomeContainer } from "../../App.styled";
import { Companies } from "../../components/Companies/Companies";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Hero />
      <Companies />
    </HomeContainer>
  );
};
export default Home;
