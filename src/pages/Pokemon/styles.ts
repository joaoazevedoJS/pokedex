import styled from 'styled-components';

export const PokemonContainer = styled.div`
  padding: 2rem 0;
  overflow: hidden;

  main {
    > section {
      position: relative;

      > button {
        border: 0;
        background: transparent;

        h1 {
          font-size: 2rem;
          font-weight: 600;
          line-height: 115%;
          color: var(--gray-900);
        }
      }

      strong {
        display: block;
        font-size: 1.5rem;
        line-height: 125%;
        margin: 2rem 0;
        color: var(--gray-700);
      }

      img {
        position: absolute;
        top: -4.5rem;
        right: -4.5rem;
        width: 10rem;
        opacity: 0.2;
      }

      form {
        display: flex;
        align-items: center;

        height: 2.5rem;
        margin-bottom: 1.5rem;

        > div {
          margin-right: 1rem;
        }

        button {
          height: 100%;
          padding: 0.5rem 1rem;

          font-family: 'Mukta', sans-serif;
          font-weight: 600;
          text-transform: uppercase;

          border: none;
          border-radius: 0.25rem;

          background: var(--blue-400);
          color: var(--white);

          @media (min-width: 500px) {
            padding: 0.5rem 2rem;
          }
        }
      }
    }

    ul {
      > div {
        display: grid;
        gap: 1rem;

        @media (min-width: 350px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 550px) {
          grid-template-columns: repeat(3, 1fr);
        }

        @media (min-width: 800px) {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
`;
