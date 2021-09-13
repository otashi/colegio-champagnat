import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { RoutesSwitch } from './routes/Routes';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <BrowserRouter>
        <Nav />
        <RoutesSwitch />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
