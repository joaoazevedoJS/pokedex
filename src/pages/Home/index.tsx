import { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';

import HeroImg from '../../assets/images/hero.svg';

import { HomeContainer, Content } from './styles';

const Home: FC = () => {
  const history = useHistory();

  const handleNavigationToPokedex = useCallback(() => {
    history.push('/pokemon');
  }, [history]);

  return (
    <HomeContainer>
      <Layout>
        <h1>Pokedex</h1>
      </Layout>

      <Content>
        <img src={HeroImg} alt="Pikachu" />

        <main>
          <h2>Procure todos seus Pokémons favoritos</h2>

          <p>
            Você pode saber o tipo de Pokémon, seus pontos fortes, desvantagens
            e habilidades
          </p>

          <button type="button" onClick={handleNavigationToPokedex}>
            Ver Pokémons
          </button>
        </main>

        <footer>
          <a
            href="https://github.com/joaoazevedoJS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Criado pelo joaoazevedojs
          </a>
        </footer>
      </Content>
    </HomeContainer>
  );
};

export default Home;
