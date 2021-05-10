import { PokemonTypes } from 'pokedex-promise-v2';
import { FC, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

import { rgba, shade } from 'polished';
import { Container } from './styles';
import { IPokemonStat } from '../../../hooks/usePokemon';
import { backgroundByTypes } from '../../../styles/variables/pokemonColor';

interface IChartRadar {
  pokemon: string;
  type: PokemonTypes;
  stats: Array<IPokemonStat>;
}

const ChartRadar: FC<IChartRadar> = ({ stats, type, pokemon }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const labels = stats.map(stat => stat.name);

    const data = {
      labels,
      datasets: [
        {
          label: `Status do ${pokemon}`,
          data: stats.map(stat => stat.base_stat),
          fill: true,
          backgroundColor: rgba(backgroundByTypes[type], 0.4),
          borderColor: backgroundByTypes[type],
          pointBackgroundColor: shade(0.2, backgroundByTypes[type]),
          pointBorderColor: backgroundByTypes[type],
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: shade(0.2, backgroundByTypes[type]),
        },
      ],
    };

    const chart = new Chart(canvasRef.current, {
      type: 'radar',
      data,
      options: {
        scales: {
          r: {
            suggestedMin: 100,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [stats, type, pokemon]);

  return <Container ref={canvasRef} />;
};

export default ChartRadar;
