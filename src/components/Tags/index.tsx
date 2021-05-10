import { FC } from 'react';
import { PokemonTypes } from 'pokedex-promise-v2';

import { tagsIcons } from './icons';

import { TagsContainer } from './styles';

interface ITagsProps {
  types: Array<{
    name: PokemonTypes;
  }>;
}

const Tags: FC<ITagsProps> = ({ types }) => {
  return (
    <TagsContainer>
      {types.map(type => (
        <img key={type.name} src={tagsIcons[type.name]} alt={type.name} />
      ))}
    </TagsContainer>
  );
};

export default Tags;
