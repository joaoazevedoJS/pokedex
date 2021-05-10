import {
  IPokemon as PokemonByApi,
  IPokemonProfile,
  ISpeciesPreview,
} from 'pokedex-promise-v2';

import { IPokemon, ISpecie } from '../hooks/usePokemon';

import pokeApi from '../services/pokeApi';

interface IFormatPokemonDTO {
  pokemon: IPokemonProfile;
  specie: ISpeciesPreview;
}

async function getPokemonProfile(pokemon: PokemonByApi): Promise<IPokemon> {
  const response = await pokeApi.getPokemonByName(pokemon.name);
  const specieReponse = await pokeApi.getPokemonSpeciesByName(pokemon.name);

  const profile = formatPokemonObject({
    pokemon: response,
    specie: specieReponse,
  });

  return profile;
}

function formatPokemonObject({ pokemon, specie }: IFormatPokemonDTO): IPokemon {
  const { animated } = pokemon.sprites.versions['generation-v']['black-white'];

  const specieFormated: ISpecie = {
    ...specie,
    flavor_text: specie.flavor_text_entries[0]?.flavor_text
      .split('\n')
      .join(' '),
  };

  const profile: IPokemon = {
    ...pokemon,
    types: pokemon.types.map(type => type.type),
    sprites: {
      front_default: animated.front_default ?? pokemon.sprites.front_default,
      front_shiny: animated.front_shiny ?? pokemon.sprites.front_shiny,
    },
    stats: pokemon.stats.map(stat => {
      return {
        base_stat: stat.base_stat,
        name: stat.stat.name,
      };
    }),
    specie: specieFormated,
    moves: pokemon.moves.map(move => move.move.name),
  };

  return profile;
}

async function getManyPokemonProfile(
  pokemons: PokemonByApi[],
): Promise<IPokemon[]> {
  const profiles = await Promise.all(
    pokemons.map(async pokemon => {
      const profile = await getPokemonProfile(pokemon);

      return profile;
    }),
  );

  profiles.sort((a, b) => a.id - b.id);

  return profiles;
}

export { getPokemonProfile, getManyPokemonProfile, formatPokemonObject };
