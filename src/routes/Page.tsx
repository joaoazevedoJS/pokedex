import { FC, useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Settings from '../components/Settings';

interface Props extends RouteProps {
  hasSetting?: boolean;
  component: React.ComponentType;
}

const Page: FC<Props> = ({ hasSetting, component: Component, ...rest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [rest]);

  return (
    <Route
      {...rest}
      render={() => (
        <>
          {hasSetting && <Settings />}

          <Component />
        </>
      )}
    />
  );
};

export default Page;
