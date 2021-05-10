import { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Page from './Page';

import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import PokemonProfile from '../pages/Pokemon/PokemonProfile';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Page path="/" exact component={Home} />
      <Page path="/pokemon" exact component={Pokemon} hasSetting />
      <Page path="/pokemon/:name" component={PokemonProfile} hasSetting />
    </Switch>
  </BrowserRouter>
);

export default Routes;
