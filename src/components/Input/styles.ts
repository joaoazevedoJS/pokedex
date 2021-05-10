import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;

  border: 1px solid var(--gray-100);
  border-radius: 0.25rem;

  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border: 1px solid #c0312f;

      svg {
        color: #c0312f !important;
      }
    `}

  input {
    width: 100%;
    height: 100%;
    border: none;

    padding: 0.5rem 0.75rem;
  }

  svg {
    font-size: 1.5rem;
    margin: 0 0.5rem;
  }
`;
