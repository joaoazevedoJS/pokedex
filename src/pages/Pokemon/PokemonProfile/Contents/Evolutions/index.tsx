import { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { usePokemon } from '../../../../../hooks/usePokemon';

import { IContentProps } from '../type';

import PokeballImg from '../../../../../assets/images/pokeball.png';

import {
  NotEvolve,
  EvolutionsContainer,
  EvolutionContent,
  Evolution,
  EvolutionLevel,
} from './styles';

const Evolutions: FC<IContentProps> = ({ evolutions }) => {
  const navigation = useHistory();

  const { isSearchShiny } = usePokemon();

  const handleNavigateToPokemonProfile = useCallback(
    (pokemon: string) => {
      navigation.push(`/pokemon/${pokemon}`);
    },
    [navigation],
  );

  if (!evolutions || evolutions.evolutions.length <= 1) {
    return <NotEvolve>Sem envoluçẽs</NotEvolve>;
  }

  return (
    <EvolutionsContainer>
      <EvolutionContent>
        <Evolution
          onClick={() => {
            handleNavigateToPokemonProfile(evolutions.evolutions[0].name);
          }}
        >
          <img
            src={
              isSearchShiny
                ? evolutions.evolutions[0].sprites.front_shiny
                : evolutions.evolutions[0].sprites.front_default
            }
            alt={evolutions.evolutions[0].name}
          />

          <strong>{evolutions.evolutions[0].name}</strong>

          <div>
            <img src={PokeballImg} alt="" />
          </div>
        </Evolution>

        <EvolutionLevel>
          {evolutions.levels[0] > 0 ? (
            `Lv. ${evolutions.levels[0]}`
          ) : (
            <span>Pedra de envolução</span>
          )}
        </EvolutionLevel>

        <Evolution
          onClick={() => {
            handleNavigateToPokemonProfile(evolutions.evolutions[1].name);
          }}
        >
          <img
            src={
              isSearchShiny
                ? evolutions.evolutions[1].sprites.front_shiny
                : evolutions.evolutions[1].sprites.front_default
            }
            alt={evolutions.evolutions[1].name}
          />

          <strong>{evolutions.evolutions[1].name}</strong>

          <div>
            <img src={PokeballImg} alt="" />
          </div>
        </Evolution>
      </EvolutionContent>

      {evolutions.evolutions.length >= 3 && (
        <EvolutionContent>
          <Evolution
            onClick={() => {
              handleNavigateToPokemonProfile(evolutions.evolutions[1].name);
            }}
          >
            <img
              src={
                isSearchShiny
                  ? evolutions.evolutions[1].sprites.front_shiny
                  : evolutions.evolutions[1].sprites.front_default
              }
              alt={evolutions.evolutions[1].name}
            />

            <strong>{evolutions.evolutions[1].name}</strong>

            <div>
              <img src={PokeballImg} alt="" />
            </div>
          </Evolution>

          <EvolutionLevel>
            {evolutions.levels[1] > 0 ? (
              `Lv. ${evolutions.levels[1]}`
            ) : (
              <span>Pedra de envolução</span>
            )}
          </EvolutionLevel>

          <Evolution
            onClick={() => {
              handleNavigateToPokemonProfile(evolutions.evolutions[2].name);
            }}
          >
            <img
              src={
                isSearchShiny
                  ? evolutions.evolutions[2].sprites.front_shiny
                  : evolutions.evolutions[2].sprites.front_default
              }
              alt={evolutions.evolutions[2].name}
            />

            <strong>{evolutions.evolutions[2].name}</strong>

            <div>
              <img src={PokeballImg} alt="" />
            </div>
          </Evolution>
        </EvolutionContent>
      )}
    </EvolutionsContainer>
  );
};

export default Evolutions;
