import { PokemonStat, PokemonTypes } from 'pokedex-promise-v2';

export interface IPokemonContext {
  pokemons: IPokemon[];
  favorites: IPokemon[];
  count: number;
  isSearchShiny: boolean;
  isSearchFavorites: boolean;
  hasMorePokemons: boolean;
  loadMorePokemon(): void;
  getCachedPokemon(name: string): Promise<IPokemon | undefined>;
  getEvolutionBySpecie(specie: ISpecie): Promise<IEvolutions | undefined>;
  searchPokemonFavorite(name: string): IPokemon | undefined;
  togglePokemonFavorite(pokemon: IPokemon): void;
  toggleShiny(): void;
  toggleIsFavoritesPokemon(): void;
}

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: Array<{
    name: PokemonTypes;
    url: string;
  }>;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  moves: Array<string>;
  stats: Array<IPokemonStat>;
  specie: ISpecie;
}

export interface IPokemonStat {
  base_stat: number;
  name: PokemonStat;
}

export interface ISpecie {
  flavor_text?: string;
  egg_groups: Array<{
    name: string;
  }>;
  habitat?: {
    name: string;
  };
  capture_rate?: number;
  evolution_chain: {
    url: string;
  };
}

export interface IEvolutions {
  evolutions: Array<IPokemon>;
  levels: Array<number>;
}
