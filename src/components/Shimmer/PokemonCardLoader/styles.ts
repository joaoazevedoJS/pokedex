import styled from 'styled-components';

import {
  shimmerContent,
  ShimmerEffect,
} from '../../../styles/ShimmerEffectStyled';

export const CardContainer = styled(ShimmerEffect)`
  display: flex;
  align-items: center;
  border-radius: 0.8rem;

  padding: 1.5rem 0.1rem 1.5rem 1rem;
  position: relative;

  section {
    display: flex;
    flex-direction: column;

    ul {
      margin-top: 1rem;
      display: flex;

      div + div {
        margin-left: 0.5rem;
      }
    }
  }

  > span {
    position: absolute;
    top: 1rem;
    right: 1rem;

    div {
      width: 2rem;
      height: 1rem;
    }
  }
`;

export const Title = styled(shimmerContent)`
  height: 1.5rem;
  width: 5rem;
  border-radius: 0.25rem;
`;

export const Type = styled(shimmerContent)`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;

export const Pokemon = styled(shimmerContent)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`;
