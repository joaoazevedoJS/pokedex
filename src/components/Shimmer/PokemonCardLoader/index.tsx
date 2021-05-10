import { FC } from 'react';

import { CardContainer, Title, Type, Pokemon } from './styles';

export * from './many';

const PokemonCardLoader: FC = () => {
  return (
    <CardContainer>
      <section>
        <Title />

        <ul>
          <Type />
          <Type />
        </ul>
      </section>

      <span>
        <Title />
      </span>

      <Pokemon />
    </CardContainer>
  );
};

export default PokemonCardLoader;
