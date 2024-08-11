import { Logo } from "../Logo/Logo";
import { Burger } from "./Burger/Burger";
import { HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Burger />
    </HeaderContainer>
  );
};
