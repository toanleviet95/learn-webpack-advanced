import { FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '@/components/Navgation';
import Loading from '@/components/Loading';

const Home = lazy(() => import(/* webpackChunkName: 'home' */ '@/pages/Home'));
const Dashboard = lazy(() => import(/* webpackChunkName: 'dashboard' */ '@/pages/Dashboard'));
const Profile = lazy(() => import(/* webpackChunkName: 'profile' */ '@/pages/Profile'));

const App: FunctionComponent<{}> = () => {
  return (
    <main>
      <BrowserRouter>
        <header>
          <Navigation />
        </header>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </main>
  );
};

export default App;
