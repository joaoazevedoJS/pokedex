import { FC, useMemo } from 'react';

import { IContentProps } from '../type';

import { AboutContainer, Content } from './styles';

const About: FC<IContentProps> = ({ pokemon }) => {
  const eggsGroupFormated = useMemo(() => {
    return pokemon.specie.egg_groups.reduce((acc, value) => {
      return acc ? `${acc} | ${value.name}` : value.name;
    }, '');
  }, [pokemon]);

  return (
    <AboutContainer>
      <div>
        <p>{pokemon.specie.flavor_text}</p>

        <Content>
          <strong>Altura</strong>

          <span>{(pokemon.height / 10).toFixed(2)} cm</span>
        </Content>

        <Content>
          <strong>Peso</strong>

          <span>{(pokemon.weight / 10).toFixed(2)} kg</span>
        </Content>

        <Content>
          <strong>habitat natural</strong>

          <span>{pokemon.specie.habitat?.name}</span>
        </Content>

        <Content>
          <strong>Taxa de captura</strong>

          <span>{pokemon.specie.capture_rate}%</span>
        </Content>

        <Content>
          <strong>Grupos de ovos</strong>

          <span>{eggsGroupFormated}</span>
        </Content>
      </div>
    </AboutContainer>
  );
};

export default About;
