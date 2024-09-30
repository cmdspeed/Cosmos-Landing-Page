import { HomeContainer } from "../../App.styled";
import { Companies } from "../../components/Companies/Companies";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Hero />
      <Companies />
      <Footer />
    </HomeContainer>
  );
};
export default Home;
