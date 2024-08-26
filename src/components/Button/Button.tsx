import { ButtonStyled } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
