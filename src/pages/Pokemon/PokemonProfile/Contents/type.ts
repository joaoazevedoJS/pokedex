import { IEvolutions, IPokemon } from '../../../../hooks/usePokemon';

export interface IContentProps {
  pokemon: IPokemon;
  evolutions?: IEvolutions;
}
