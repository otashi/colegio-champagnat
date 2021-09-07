import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Nav } from './components/Nav';

import { Home } from './pages/Home';
import { QuienesSomos } from './pages/QuienesSomos';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/quienes-somos' component={QuienesSomos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
