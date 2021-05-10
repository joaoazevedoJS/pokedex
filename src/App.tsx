import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import { AnimateSharedLayout } from 'framer-motion';

import Provider from './hooks';
import Routes from './routes';

import GlobalStyled from './styles/GlobalStyled';
import ToggleStyled from './styles/ToggleStyled';

const App: FC = () => {
  return (
    <AnimateSharedLayout>
      <GlobalStyled />
      <ToggleStyled />

      <Provider>
        <Routes />
      </Provider>

      <ToastContainer />
    </AnimateSharedLayout>
  );
};

export default App;
