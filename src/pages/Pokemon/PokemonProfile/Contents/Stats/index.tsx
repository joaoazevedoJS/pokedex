import { FC } from 'react';

import ChartRadar from '../../../../../components/Charts/ChartRadar';

import { IContentProps } from '../type';

import { StatsContainer } from './styles';

const Stats: FC<IContentProps> = ({ pokemon }) => {
  return (
    <StatsContainer>
      <ChartRadar
        stats={pokemon.stats}
        type={pokemon.types[0].name}
        pokemon={pokemon.name}
      />
    </StatsContainer>
  );
};

export default Stats;
