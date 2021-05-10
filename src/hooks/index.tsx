import { FC } from 'react';

import { PokemonProvider } from './usePokemon';

const Provider: FC = ({ children }) => {
  return <PokemonProvider>{children}</PokemonProvider>;
};

export default Provider;
