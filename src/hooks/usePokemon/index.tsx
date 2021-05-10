import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { toast } from 'react-toastify';

import pokeApi from '../../services/pokeApi';

import {
  getManyPokemonProfile,
  formatPokemonObject,
} from '../../utils/getPokemonProfile';

import { IPokemon, IPokemonContext, ISpecie } from './types';

export * from './types';

const PokemonContext = createContext<IPokemonContext>({} as IPokemonContext);

const PokemonProvider: FC = ({ children }) => {
  const [offset, setOffset] = useState(1);
  const [count, setCount] = useState(0);

  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  const [favorites, setFavorites] = useState<IPokemon[]>(() => {
    const storage = localStorage.getItem('@Looqbox:favorites');

    if (!storage) {
      return [];
    }

    const pokes: IPokemon[] = JSON.parse(storage);

    return pokes;
  });

  const [isSearchShiny, setIsSearchShiny] = useState(false);
  const [isSearchFavorites, setIsSearchFavorites] = useState(false);

  const hasMorePokemons = useMemo(() => pokemons.length < count, [
    count,
    pokemons.length,
  ]);

  useEffect(() => {
    async function load() {
      try {
        const { results, count: countPokemon } = await pokeApi.getPokemonsList({
          limit: 30,
        });

        setCount(countPokemon);

        const profiles = await getManyPokemonProfile(results);

        setPokemons([...profiles]);
      } catch (error) {
        toast.error('Aconteceu erro na hora de buscar os pokemon!');
      }
    }

    load();
  }, []);

  useEffect(() => {
    localStorage.setItem('@Looqbox:favorites', JSON.stringify(favorites));
  }, [favorites]);

  const loadMorePokemon = useCallback(async () => {
    try {
      const { results } = await pokeApi.getPokemonsList({
        limit: 30,
        offset: offset * 30,
      });

      const profiles = await getManyPokemonProfile(results);

      setPokemons([...pokemons, ...profiles]);
    } catch (error) {
      toast.error('Aconteceu erro na hora de buscar os pokemon!');
    } finally {
      setOffset(offset + 1);
    }
  }, [offset, pokemons]);

  const getCachedPokemon = useCallback(
    async (name: string) => {
      const nameLowercase = name.toLocaleLowerCase();

      try {
        const pokemonCached = pokemons.find(
          poke => poke.name.toLocaleLowerCase() === nameLowercase,
        );

        if (pokemonCached) {
          return pokemonCached;
        }

        const pokemon = await pokeApi.getPokemonByName(nameLowercase);
        const specie = await pokeApi.getPokemonSpeciesByName(nameLowercase);

        const pokemonFormated = formatPokemonObject({ pokemon, specie });

        return pokemonFormated;
      } catch {
        toast.warn(`Nenhum pokémon com chamado ${name} foi encontrado!`);

        return undefined;
      }
    },
    [pokemons],
  );

  const getEvolutionBySpecie = useCallback(
    async (specie: ISpecie) => {
      const envolutionCode = specie.evolution_chain.url.replace(
        /https:\/\/pokeapi.co\/api\/v2\/evolution-chain\/|\//g,
        '',
      );

      const { chain } = await pokeApi.getEvolutionChainById(
        Number(envolutionCode),
      );

      const { evolves_to, species } = chain;

      if (!species) {
        return undefined;
      }

      const firstEvolution = species.name;

      const middleEvolution = evolves_to[0]?.species.name;
      const firstLevelMin = evolves_to[0]?.evolution_details[0]?.min_level ?? 0;

      const lastEvolution = evolves_to[0]?.evolves_to[0]?.species.name;
      const secoundLevelMin =
        evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_level ?? 0;

      const levels = [firstLevelMin, secoundLevelMin];
      const evolutions: IPokemon[] = [];

      await Promise.all(
        [firstEvolution, middleEvolution, lastEvolution].map(async pokemon => {
          if (pokemon) {
            const profile = await getCachedPokemon(pokemon);

            if (profile) {
              evolutions.push(profile);
            }
          }
        }),
      );

      if (evolutions.length > 0) {
        evolutions.sort((a, b) => a.id - b.id);

        const result = {
          evolutions,
          levels,
        };

        return result;
      }

      return undefined;
    },
    [getCachedPokemon],
  );

  const toggleShiny = useCallback(() => {
    setIsSearchShiny(!isSearchShiny);
  }, [isSearchShiny]);

  const toggleIsFavoritesPokemon = useCallback(() => {
    setIsSearchFavorites(!isSearchFavorites);
  }, [isSearchFavorites]);

  const togglePokemonFavorite = useCallback((pokemon: IPokemon) => {
    const storage = localStorage.getItem('@Looqbox:favorites');

    if (!storage) {
      setFavorites([pokemon]);

      return;
    }

    const pokes: IPokemon[] = JSON.parse(storage);

    const isAlreadyFavorite = pokes.find(poke => poke.name === pokemon.name);

    if (isAlreadyFavorite) {
      const pokesFiltred = pokes.filter(poke => poke.name !== pokemon.name);

      setFavorites(pokesFiltred);

      return;
    }

    const favoritesPokemons = [...pokes, pokemon];

    setFavorites(favoritesPokemons);
  }, []);

  const searchPokemonFavorite = useCallback(
    (pokemon: string) => {
      const favorite = favorites.find(poke => poke.name === pokemon);

      return favorite;
    },
    [favorites],
  );

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        favorites,
        count,
        isSearchShiny,
        isSearchFavorites,
        hasMorePokemons,
        loadMorePokemon,
        getCachedPokemon,
        getEvolutionBySpecie,
        searchPokemonFavorite,
        togglePokemonFavorite,
        toggleShiny,
        toggleIsFavoritesPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

function usePokemon(): IPokemonContext {
  const context = useContext(PokemonContext);

  return context;
}

export { PokemonProvider, usePokemon };
