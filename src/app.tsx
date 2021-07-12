import AppLayout from 'components/layout';
import Home from 'pages/home';
import Profile from 'pages/profile';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <AppLayout>
      <Switch>
        <Route path={['/', '/Home']} exact>
          <Home />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </AppLayout>
  );
}

export default App;
