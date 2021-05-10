import { FC } from 'react';

import { Container } from './styles';

const Layout: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
