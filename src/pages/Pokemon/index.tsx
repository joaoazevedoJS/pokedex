import { FC, useCallback, useRef, useState } from 'react';
import InfinityScroll from 'react-infinite-scroller';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Input from '../../components/Input';
import { ManyPokemonCardLoader } from '../../components/Shimmer/PokemonCardLoader';

import { getValidationErrors } from '../../utils/getValidationErrors';

import { IPokemon, usePokemon } from '../../hooks/usePokemon';

import PokeballImg from '../../assets/images/pokeball.png';

import { PokemonContainer } from './styles';

interface ISubmitData {
  pokemon: string;
}

const Pokemon: FC = () => {
  const navigate = useHistory();
  const formRef = useRef<FormHandles>(null);

  const [searchPokemon, setSearchPokemon] = useState<IPokemon>();

  const {
    pokemons,
    favorites,
    count,
    isSearchFavorites,
    hasMorePokemons,
    getCachedPokemon,
    searchPokemonFavorite,
    loadMorePokemon,
  } = usePokemon();

  const handleSubmit = useCallback(
    async (data: ISubmitData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          pokemon: Yup.string().required('Digite o nome do pokemon!'),
        });

        await schema.validate(data, { abortEarly: false });

        if (isSearchFavorites) {
          const pokemon = searchPokemonFavorite(data.pokemon);

          if (pokemon) {
            setSearchPokemon(pokemon);
          } else {
            toast.info(
              `Não foi encontrado nenhum pokemon chamado "${data.pokemon}", no seus favoritos!`,
            );

            formRef.current?.clearField('pokemon');
          }

          return;
        }

        const pokemon = await getCachedPokemon(data.pokemon);

        if (pokemon) {
          setSearchPokemon(pokemon);
        }
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Aconteceu um erro na busca do pokemon, tente novamente!');
        formRef.current?.clearField('pokemon');
      }
    },
    [getCachedPokemon, isSearchFavorites, searchPokemonFavorite],
  );

  const listenSearch = useCallback(
    (inputValue: string) => {
      if (!inputValue && searchPokemon) {
        setSearchPokemon(undefined);
      }
    },
    [searchPokemon],
  );

  const handleNavigateToHome = useCallback(() => {
    navigate.push('/');
  }, [navigate]);

  return (
    <PokemonContainer>
      <Layout>
        <main>
          <section>
            <button type="button" onClick={handleNavigateToHome}>
              <h1>Looqdex</h1>
            </button>

            <strong>
              {count} Pokémons para você <br /> Escolher o seu favorito
            </strong>

            <img src={PokeballImg} alt="Pokeball" />

            <Form onSubmit={handleSubmit} ref={formRef}>
              <Input
                name="pokemon"
                placeholder="Digite o nome do pokémon!"
                onChange={e => listenSearch(e.target.value)}
              />

              <button type="submit">Procurar</button>
            </Form>
          </section>

          <ul>
            {searchPokemon ? (
              <div>
                <PokemonCard pokemon={searchPokemon} />
              </div>
            ) : (
              <InfinityScroll
                initialLoad={false}
                loadMore={loadMorePokemon}
                hasMore={hasMorePokemons && !isSearchFavorites}
                loader={<ManyPokemonCardLoader key="loader" />}
              >
                {isSearchFavorites &&
                  favorites.map(pokemon => (
                    <li key={pokemon.id}>
                      <PokemonCard pokemon={pokemon} />
                    </li>
                  ))}

                {!isSearchFavorites &&
                  pokemons.map(pokemon => (
                    <li key={pokemon.id}>
                      <PokemonCard pokemon={pokemon} />
                    </li>
                  ))}
              </InfinityScroll>
            )}
          </ul>
        </main>
      </Layout>
    </PokemonContainer>
  );
};

export default Pokemon;
