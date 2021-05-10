import { PokemonTypes } from 'pokedex-promise-v2';
import styled, { css } from 'styled-components';
import { lighten, shade } from 'polished';

import {
  backgroundByTypes,
  whiteColorToType,
} from '../../../styles/variables/pokemonColor';

export interface IPokemonType {
  pokemonType: PokemonTypes;
}

export interface IHeader {
  pokemonType: PokemonTypes;
  isFavorite?: boolean;
}

export const PokemonProfileContainer = styled.div<IPokemonType>`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  width: 100%;
  min-height: calc(100vh);

  > div {
    width: 100%;
  }

  ${({ pokemonType }) => css`
    background: ${backgroundByTypes[pokemonType]};
  `};

  color: ${({ pokemonType }) =>
    whiteColorToType.includes(pokemonType)
      ? 'var(--white);'
      : 'var(--gray-900);'};
`;

export const Header = styled.header<IHeader>`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 1.5rem;
    cursor: pointer;

    transition: color 0.4s, fill 0.4s;
  }

  svg:first-child {
    &:hover {
      color: ${({ pokemonType }) =>
        lighten(
          0.2,
          whiteColorToType.includes(pokemonType) ? '#fff' : '#212121',
        )};
    }
  }

  svg:last-child {
    ${({ isFavorite }) =>
      isFavorite &&
      css`
        fill: #ca5750;
        color: #ca5750;
      `}

    &:hover {
      color: ${shade(0.2, '#ca5750')};

      ${({ isFavorite }) =>
        isFavorite &&
        css`
          fill: ${shade(0.2, '#ca5750')};
        `}
    }
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ContentHeader = styled.section<IPokemonType>`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2rem;
      text-transform: capitalize;
    }
  }

  > span {
    font-size: 1.25rem;

    color: ${({ pokemonType }) =>
      whiteColorToType.includes(pokemonType)
        ? 'var(--white);'
        : 'var(--gray-700);'};
  }
`;

export const ContentMain = styled.section`
  width: 100%;
  margin-top: 2rem;
  position: relative;

  display: flex;
  justify-content: center;

  > img {
    width: 10rem;
    z-index: 2;
  }

  div {
    user-select: none;
    z-index: 0;

    img {
      position: absolute;
    }

    img:first-child {
      opacity: 0.3;
      width: 12rem;

      right: -2rem;
      top: -1rem;
    }

    img:last-child {
      width: 4rem;
      top: 20%;
      left: 20%;

      @media (min-width: 430px) {
        width: 10rem;
        opacity: 0.7;
      }
    }
  }
`;

export const Info = styled.div`
  padding: 1.5rem 0.5rem;
  z-index: 1;

  flex: 1;

  border-radius: 3rem 3rem 0 0;
  background: var(--white);

  max-width: 1320px;
  margin: -2rem auto 0 auto;

  nav {
    padding: 1rem 0;

    ul {
      display: flex;
      justify-content: space-between;

      border-bottom: 1px solid var(--gray-100);

      li {
        width: 100%;

        &.selected {
          button {
            color: var(--gray-700);
            border-bottom: 1px solid var(--gray-700);
          }
        }

        &:hover {
          button {
            color: ${shade(0.2, '#9A9A9A')};
          }
        }

        button {
          width: 100%;
          padding: 1rem 0.5rem;
          border: none;
          background: transparent;
          font-family: 'Mukta', sans-serif;
          font-size: 1rem;
          font-weight: 600;

          color: var(--gray-500);
          transition: color 0.4s, border-color 0.4s;
        }
      }
    }
  }
`;
