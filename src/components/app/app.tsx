import { AppRoute } from 'common/enums/enums';
import { BrowserRouter, Switch, Route } from 'components/common/common';
import Certificate from 'components/certificate/certificate';
import NotFound from 'components/not-found/not-found';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Certificate />
      <Route path={AppRoute.ANY} component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
