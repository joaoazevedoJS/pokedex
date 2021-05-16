import { shade } from 'polished';
import styled from 'styled-components';
import { Container } from '../../components/Layout/styles';

export const HomeContainer = styled.div`
  background: linear-gradient(180deg, #f5db13 0%, #f7bc0b 100%);
  width: 100%;
  min-height: 100vh;

  h1 {
    font-size: 2rem;
    color: var(--gray-900);
    font-family: 'Mukta', sans-serif;
    font-weight: 600;
    padding-top: 2rem;

    align-self: flex-start;
  }
`;

export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 6rem);

  img {
    margin-top: auto;

    max-width: 400px;
    width: 100%;
  }

  main {
    margin: 2rem 0;

    h2 {
      font-size: 1.5rem;
      line-height: 115%;
      color: var(--gray-900);
    }

    p {
      font-size: 1rem;
      color: var(--gray-600);
      line-height: 145%;
      margin: 1rem 0;
    }

    button {
      padding: 1rem 2rem;
      border: 0;
      background: var(--green-400);
      border-radius: 0.5rem;
      font-size: 1rem;
      font-family: 'Nunito', sans-serif;
      font-weight: bold;
      color: var(--gray-700);
      transition: background-color 0.4s, color 0.4s;

      &:hover {
        background: ${shade(0.2, '#73D677')};
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;

    height: 2rem;
    width: 100%;
    border-top: 1px solid var(--gray-500);

    margin-top: auto;
    padding: 2rem 0;

    a {
      color: var(--gray-600);
    }
  }
`;
