import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home/index';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};
