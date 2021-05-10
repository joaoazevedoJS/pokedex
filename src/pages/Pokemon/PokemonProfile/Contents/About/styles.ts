import styled from 'styled-components';

export const AboutContainer = styled.div`
  div {
    p {
      font-size: 1.1rem;
      line-height: 145%;
      text-transform: lowercase;
      color: var(--gray-700);
      margin-bottom: 2rem;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;

  margin-bottom: 1rem;

  strong {
    color: var(--gray-900);
  }

  span {
    color: var(--gray-700);
    text-transform: capitalize;
  }
`;
