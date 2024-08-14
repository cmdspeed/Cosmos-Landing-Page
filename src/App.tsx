import { HeaderWrapper } from "./App.styled";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <HeaderWrapper>
      <Header />
      <Hero />
    </HeaderWrapper>
  );
}

export default App;
