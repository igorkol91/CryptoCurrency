import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCrypto } from './redux/reducers/cryptoReducers';
import Links from './components/Links';
import RoutesAndElements from './components/Routes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCrypto());
  }, []);

  return (
    <div className="container-sm">
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <Links />
          </Route>
          <RoutesAndElements />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
