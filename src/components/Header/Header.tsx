import { BurgerIcon } from "../BurgerIcon/BurgerIcon";
import { Logo } from "../Logo/Logo";

import { HeaderContainer } from "./Header.styled";

export const Header = () => {
  const LogoSizeWidth = () => {
    if (window.screen.width >= 1024 && window.screen.width < 1920) {
      return 9.61;
    } else if (window.screen.width >= 1920) {
      return 12.81;
    }
  };

  const LogoSizeHeight = () => {
    if (window.screen.width >= 1024 && window.screen.width < 1920) {
      return 1.5;
    } else if (window.screen.width >= 1920) {
      return 2;
    }
  };

  return (
    <HeaderContainer>
      <Logo width={LogoSizeWidth()} height={LogoSizeHeight()} />
      <BurgerIcon width={24} height={24} />
    </HeaderContainer>
  );
};
