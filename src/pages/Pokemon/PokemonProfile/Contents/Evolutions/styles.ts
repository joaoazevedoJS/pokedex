import styled from 'styled-components';

export const NotEvolve = styled.strong`
  display: block;
  text-align: center;
  font-size: 1.2rem;
  color: var(--gray-500);
  margin-top: 4rem;
`;

export const EvolutionsContainer = styled.div`
  display: grid;
  row-gap: 2rem;

  max-width: 600px;
  margin: 3rem auto 0 auto;
`;

export const EvolutionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Evolution = styled.div`
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 4rem;
    height: 4rem;
    z-index: 2;
  }

  strong {
    font-family: 'Mukta', sans-serif;
    color: var(--gray-700);
    margin-top: 0.5rem;
  }

  div {
    position: absolute;
    opacity: 0.2;

    img {
      height: 4rem;
    }
  }
`;

export const EvolutionLevel = styled.div`
  width: 4rem;

  display: flex;
  justify-content: center;

  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Mukta', sans-serif;
  color: var(--gray-500);

  &::before {
    content: '';
  }

  span {
    font-size: 1rem;
    text-align: center;
  }
`;
