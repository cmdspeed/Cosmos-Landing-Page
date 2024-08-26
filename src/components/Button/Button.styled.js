import styled from "styled-components";

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
`;
