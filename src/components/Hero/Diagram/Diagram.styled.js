import styled from "styled-components";

export const DiagramElement = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const DiagramSvg = styled.svg`
  background-color: var(--diagram-color);
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 0.75rem;
`;
export const DiagramTitle = styled.h1`
  margin-left: 0.75rem;
  font-size: 0.875rem;
`;

export const GraphSvg = styled.svg`
  margin-right: 0.375rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const DiagramWrapper = styled.div`
  background-color: var(--main-text-color);
  color: var(--dark-text-color);

  max-width: 10.75rem;
  max-height: 7.31rem;

  border-radius: 1.5rem;

  padding: 0.75rem;

  position: relative;
`;

export const GraphWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
