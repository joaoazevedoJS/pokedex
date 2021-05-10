import { FC, useCallback, useState } from 'react';
import { FiSliders } from 'react-icons/fi';
import Toggle from 'react-toggle';

import { usePokemon } from '../../hooks/usePokemon';

import { ButtonSetting, ClosedBackground, Modal, ModalContent } from './styles';

const Settings: FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const { toggleShiny, toggleIsFavoritesPokemon } = usePokemon();

  const handleToggleModal = useCallback(() => {
    setIsModalActive(!isModalActive);
  }, [isModalActive]);

  return (
    <>
      <ButtonSetting onClick={handleToggleModal}>
        <FiSliders />
      </ButtonSetting>

      <Modal
        animate={{
          display: isModalActive ? 'block' : 'none',
          transition: {
            duration: 0.2,
          },
        }}
      >
        <ClosedBackground
          onClick={handleToggleModal}
          animate={{
            opacity: isModalActive ? 1 : 0,
            transition: {
              duration: 0.2,
            },
          }}
        />

        <ModalContent
          animate={{
            x: isModalActive ? 0 : '100%',
            transition: {
              duration: 0.2,
            },
          }}
        >
          <ul>
            <li>
              <Toggle id="toggle-shiny" icons={false} onChange={toggleShiny} />

              <label htmlFor="toggle-shiny">Mostrar pokémons shiny</label>
            </li>

            <li>
              <Toggle
                id="toggle-favorites"
                icons={false}
                onChange={toggleIsFavoritesPokemon}
              />

              <label htmlFor="toggle-favorites">
                Mostrar meus pokémons favoritos
              </label>
            </li>
          </ul>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Settings;
