declare module 'pokedex-promise-v2' {
  export default class Pokedex {
    public getPokemonsList(
      props?: IGetPokemonsListProps,
    ): Promise<IGetPokemonsList>;

    public getPokemonByName(name: string): Promise<IPokemonProfile>;

    public getPokemonSpeciesByName(name: string): Promise<ISpeciesPreview>;

    public getEvolutionChainById(id: number): Promise<IPokemonEvolve>;
  }

  export interface IGetPokemonsListProps {
    // is how many items you want to list
    limit?: number;

    // is where to start. The first item that you will get.
    offset?: number;
  }

  export interface IGetPokemonsList {
    count: number;
    results: IPokemon[];
  }

  export interface IPokemon {
    name: string;
    url: string;
  }

  export interface IPokemonProfile {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    types: Array<{
      type: {
        name: PokemonTypes;
        url: string;
      };
    }>;
    sprites: {
      front_default: string;
      front_shiny: string;
      versions: ISpritesVersion;
    };
    stats: Array<{
      base_stat: number;
      stat: {
        name: PokemonStat;
      };
    }>;
    moves: Array<{
      move: {
        name: string;
      };
    }>;
  }

  export interface ISpritesVersion {
    'generation-v': {
      'black-white': {
        animated: {
          front_default: string;
          front_shiny: string;
        };
      };
    };
  }

  export interface ISpeciesPreview {
    flavor_text_entries: Array<{
      flavor_text: string;
    }>;
    egg_groups: Array<{
      name: string;
    }>;
    habitat: {
      name: string;
    };
    capture_rate: number;
    evolution_chain: {
      url: string;
    };
  }

  export interface IPokemonEvolve {
    chain: {
      evolution_details: Array<{
        min_level: number;
      }>;
      evolves_to: Array<IPokemonEvolvesTo>;
      species: {
        name: string;
      };
    };
  }

  export interface IPokemonEvolvesTo {
    evolution_details: Array<{
      min_level: number;
    }>;
    evolves_to: Array<{
      evolution_details: Array<{
        min_level: number;
      }>;
      evolves_to: Array<{
        species: {
          name: string;
        };
      }>;
      species: {
        name: string;
      };
    }>;
    species: {
      name: string;
    };
  }

  export type PokemonStat =
    | 'hp'
    | 'attack'
    | 'defense'
    | 'special-attack'
    | 'special-defense'
    | 'speed';

  export type PokemonTypes =
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy'
    | 'unknown'
    | 'shadow';
}
