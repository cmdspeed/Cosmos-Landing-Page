import { Logo } from "../Logo/Logo";
import {
  FooterWrapper,
  ListItem,
  StyledEmailLink,
  StyledLink,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Logo width={9.61} height={1.5} />
      <ul>
        <ListItem>
          <StyledLink to="/">Stay Connected</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/">Education</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/">Community</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/">About Us</StyledLink>
        </ListItem>
        <ListItem>
          <StyledEmailLink to="mailto:contact@odyssey.com">
            [contact@odyssey.com].
          </StyledEmailLink>
        </ListItem>
      </ul>
    </FooterWrapper>
  );
};
