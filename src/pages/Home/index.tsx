import { FC } from 'react';

import { HomeContainer } from './styles';

import HeroImg from '../../assets/images/hero.svg';

const Home: FC = () => {
  return (
    <HomeContainer>
      <h1>LooqDex</h1>

      <img src={HeroImg} alt="Pikachu" />

      <main>
        <h2>Procure todos seus Pokémons favoritos</h2>

        <p>
          Você pode saber o tipo de Pokémon, seus pontos fortes, desvantagens e
          habilidades
        </p>

        <button type="button">Ver Pokémons</button>
      </main>

      <footer>
        <a href="http://" target="_blank" rel="noopener noreferrer">Criado com </a>
      </footer>
    </HomeContainer>
  );
};

export default Home;
