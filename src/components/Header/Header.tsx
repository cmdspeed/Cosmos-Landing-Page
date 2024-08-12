import { BurgerIcon } from "../BurgerIcon/BurgerIcon";
import { Logo } from "../Logo/Logo";

import { HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <BurgerIcon width={24} height={24} />
    </HeaderContainer>
  );
};
