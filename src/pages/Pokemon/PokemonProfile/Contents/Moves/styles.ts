import styled from 'styled-components';

export const MovesContainer = styled.ul`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;

  li {
    width: 100%;
    color: var(--gray-500);
    border-bottom: 1px solid var(--gray-100);
    padding: 1rem 0.5rem 2rem 0;
  }

  @media (min-width: 350px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 920px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
