import { FC } from 'react';

import { IContentProps } from '../type';

import { MovesContainer } from './styles';

const Moves: FC<IContentProps> = ({ pokemon }) => {
  return (
    <MovesContainer>
      {pokemon.moves.map(move => (
        <li key={move}>{move}</li>
      ))}
    </MovesContainer>
  );
};

export default Moves;
