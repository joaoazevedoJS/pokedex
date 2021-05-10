import { PokemonTypes } from 'pokedex-promise-v2';

import styled, { css } from 'styled-components';
import { shade } from 'polished';

import {
  backgroundByTypes,
  whiteColorToType,
} from '../../styles/variables/pokemonColor';

export interface ICardContainerProps {
  pokemonType: PokemonTypes;
}

export const CardContainer = styled.button<ICardContainerProps>`
  ${({ pokemonType }) => css`
    background: ${backgroundByTypes[pokemonType]};

    &:hover {
      background: ${shade(0.2, backgroundByTypes[pokemonType])};
    }
  `};

  border: 0;
  border-radius: 0.8rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem 0.1rem 1.5rem 1rem;

  overflow: hidden;
  position: relative;

  transition: background-color 0.4s;

  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 1rem;

    div:first-child {
      margin-top: 0.5rem;

      strong {
        font-size: 1.2rem;
        text-align: start;
        text-transform: capitalize;

        color: ${({ pokemonType }) =>
          whiteColorToType.includes(pokemonType)
            ? 'var(--white);'
            : 'var(--gray-700);'};
      }

      span {
        position: absolute;
        top: 0.8rem;
        right: 0.8rem;
        font-weight: 700;

        color: ${({ pokemonType }) =>
          whiteColorToType.includes(pokemonType)
            ? 'var(--white);'
            : 'var(--gray-700);'};
      }
    }
  }
`;

export const ImageContainer = styled.div`
  z-index: 1;

  img:first-child {
    position: absolute;
    bottom: -0.5rem;
    right: -1rem;

    height: 6rem;

    opacity: 0.4;
    z-index: -1;
  }

  img:last-child {
    position: absolute;
    height: 4rem;
    right: 0.5rem;
    bottom: 0.5rem;
  }
`;
