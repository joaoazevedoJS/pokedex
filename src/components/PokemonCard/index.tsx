import { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import { usePokemon } from '../../hooks/usePokemon';

import Tags from '../Tags';

import PokebollBackground from '../../assets/images/pokeball.png';

import { IPokemonCardProps } from './type';

import { CardContainer, ImageContainer } from './styles';

export * from './type';

const PokemonCard: FC<IPokemonCardProps> = ({ pokemon }) => {
  const navigation = useHistory();

  const { isSearchShiny } = usePokemon();

  const handleNavigateToProfile = useCallback(
    (name: string) => {
      navigation.push(`/pokemon/${name}`);
    },
    [navigation],
  );

  return (
    <CardContainer
      pokemonType={pokemon.types[0].name}
      onClick={() => handleNavigateToProfile(pokemon.name)}
    >
      <section>
        <div>
          <strong>{pokemon.name}</strong>

          <span>#{pokemon.id.toString().padStart(3, '0')}</span>
        </div>

        <Tags types={pokemon.types} />
      </section>

      <ImageContainer>
        <img src={PokebollBackground} alt="" />

        <motion.img
          src={
            isSearchShiny
              ? pokemon.sprites.front_shiny
              : pokemon.sprites.front_default
          }
          alt={pokemon.name}
          layoutId={pokemon.name}
        />
      </ImageContainer>
    </CardContainer>
  );
};

export default PokemonCard;
