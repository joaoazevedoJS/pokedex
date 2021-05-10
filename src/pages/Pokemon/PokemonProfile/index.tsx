import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiChevronLeft, FiHeart } from 'react-icons/fi';

import { motion } from 'framer-motion';

import Tags from '../../../components/Tags';
import Layout from '../../../components/Layout';

import About from './Contents/About';
import Evolutions from './Contents/Evolutions';
import Stats from './Contents/Stats';
import Moves from './Contents/Moves';

import { IEvolutions, IPokemon, usePokemon } from '../../../hooks/usePokemon';

import PokeballImg from '../../../assets/images/pokeball.png';
import PointsIcon from '../../../assets/icons/points.svg';

import {
  PokemonProfileContainer,
  Header,
  Content,
  Info,
  ContentHeader,
  ContentMain,
} from './styles';

interface IPokemonParams {
  name: string;
}

export type IInfoNavigation = 'about' | 'stats' | 'evolutions' | 'moves';

const PokemonProfile: FC = () => {
  const navigation = useHistory();
  const { name } = useParams<IPokemonParams>();

  const {
    getCachedPokemon,
    getEvolutionBySpecie,
    searchPokemonFavorite,
    togglePokemonFavorite,
    isSearchShiny,
  } = usePokemon();

  const [pokemon, setPokemon] = useState<IPokemon>();
  const [evolutions, setEvolutions] = useState<IEvolutions>();
  const [isFavorite, setIsFavorite] = useState(false);

  const [infoNavigation, setInfoNavigation] = useState<IInfoNavigation>(
    'about',
  );

  const ContentNavigation = useMemo(() => {
    const content = {
      about: About,
      stats: Stats,
      evolutions: Evolutions,
      moves: Moves,
    };

    return content[infoNavigation];
  }, [infoNavigation]);

  useEffect(() => {
    async function load() {
      const pokemonProfile = await getCachedPokemon(name);

      if (pokemonProfile) {
        setPokemon(pokemonProfile);

        return;
      }

      navigation.push('/');
    }

    load();
  }, [getCachedPokemon, name, navigation]);

  useEffect(() => {
    if (pokemon) {
      getEvolutionBySpecie(pokemon.specie).then(response => {
        if (response) {
          setEvolutions(response);
        }
      });

      const favorite = searchPokemonFavorite(pokemon.name);

      setIsFavorite(!!favorite);
    }
  }, [getEvolutionBySpecie, pokemon, searchPokemonFavorite]);

  const handleNavigateToPokemons = useCallback(() => {
    navigation.push('/pokemon');
  }, [navigation]);

  const handleChangeInfoNavigationTo = useCallback((to: IInfoNavigation) => {
    setInfoNavigation(to);
  }, []);

  const toggleFavorite = useCallback(() => {
    if (pokemon) {
      togglePokemonFavorite(pokemon);
      setIsFavorite(!isFavorite);
    }
  }, [isFavorite, pokemon, togglePokemonFavorite]);

  if (!pokemon) {
    return <p>procurando...</p>;
  }

  return (
    <PokemonProfileContainer pokemonType={pokemon.types[0].name}>
      <Layout>
        <Header pokemonType={pokemon.types[0].name} isFavorite={isFavorite}>
          <FiChevronLeft onClick={handleNavigateToPokemons} />

          <FiHeart onClick={toggleFavorite} />
        </Header>

        <Content>
          <ContentHeader pokemonType={pokemon.types[0].name}>
            <div>
              <h1>{pokemon.name}</h1>

              <Tags types={pokemon.types} />
            </div>

            <span>#{pokemon.id.toString().padStart(3, '0')}</span>
          </ContentHeader>

          <ContentMain>
            <motion.img
              src={
                isSearchShiny
                  ? pokemon.sprites.front_shiny
                  : pokemon.sprites.front_default
              }
              alt={pokemon.name}
            />

            <div>
              <img src={PokeballImg} alt="" />
              <img src={PointsIcon} alt="" />
            </div>
          </ContentMain>
        </Content>
      </Layout>

      <Info>
        <Layout>
          <nav>
            <ul>
              <li className={infoNavigation === 'about' ? 'selected' : ''}>
                <button
                  type="button"
                  onClick={() => handleChangeInfoNavigationTo('about')}
                >
                  Sobre
                </button>
              </li>

              <li className={infoNavigation === 'stats' ? 'selected' : ''}>
                <button
                  type="button"
                  onClick={() => handleChangeInfoNavigationTo('stats')}
                >
                  Status
                </button>
              </li>

              <li className={infoNavigation === 'evolutions' ? 'selected' : ''}>
                <button
                  type="button"
                  onClick={() => handleChangeInfoNavigationTo('evolutions')}
                >
                  Evoluções
                </button>
              </li>

              <li className={infoNavigation === 'moves' ? 'selected' : ''}>
                <button
                  type="button"
                  onClick={() => handleChangeInfoNavigationTo('moves')}
                >
                  Habilidades
                </button>
              </li>
            </ul>
          </nav>

          <ContentNavigation pokemon={pokemon} evolutions={evolutions} />
        </Layout>
      </Info>
    </PokemonProfileContainer>
  );
};

export default PokemonProfile;
