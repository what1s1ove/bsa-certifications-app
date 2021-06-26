import { AppRoute, BSAType } from 'common/enums/enums';
import { FC } from 'common/types/types';
import { Switch, Route } from 'components/common/common';
import NotFound from 'components/not-found/not-found';
import { CertificateWrapper } from './components/components';

const bsaTypes = Object.values(BSAType);

const Certificate: FC = () => (
  <Switch>
    {bsaTypes.map((it) => (
      <Route
        exact
        path={`/${it}${AppRoute.$USER_ID}`}
        component={() => <CertificateWrapper bsaType={it} />}
        key={it}
      />
    ))}
    <Route exact path={AppRoute.ANY} component={NotFound} />
  </Switch>
);

export default Certificate;
