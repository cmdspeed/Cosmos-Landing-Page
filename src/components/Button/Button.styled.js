import styled from "styled-components";
import { pcView } from "../../helpers/resposive-views";

export const ButtonWrapper = styled.div``;

export const ButtonStyled = styled.button`
  background-color: var(--btn-bg-color);
  color: var(--main-text-color);
  padding: 1.25rem 2.5rem;
  font-weight: 600;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--diagram-color);
  }
  @media screen and(min-width: ${pcView}) {
    font-size: 1.5rem;
  }
`;
