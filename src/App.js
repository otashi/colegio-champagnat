import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { QuienesSomos } from './pages/QuienesSomos';
import { Historia } from './pages/Historia';
import { Identidad } from './pages/Identidad';
import { EvangelizacionMarista } from './pages/EvangelizacionMarista';
import { Pei } from './pages/Pei';
import { SistemaEvaluacionInstitucional } from './pages/SistemaEvaluacionInstitucional';
import { ProyectoEcologico } from './pages/ProyectoEcologico';
import { ManualConvivencia } from './pages/ManualConvivencia';
import { Protocolos } from './pages/Protocolos';
import { TratamientoDatos } from './pages/TratamientoDatos';
import { Admisiones } from './pages/Admisiones';
import { Pasos } from './pages/Pasos';
import { Politicas } from './pages/Politicas';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <BrowserRouter>
        <Nav />
        <Switch>
          {/* About */}
          <Route exact path='/' component={Home} />
          <Route exact path='/quienes-somos' component={QuienesSomos} />
          <Route exact path='/historia' component={Historia} />
          <Route exact path='/identidad' component={Identidad} />
          <Route
            exact
            path='/evangelizacion-marista'
            component={EvangelizacionMarista}
          />
          <Route exact path='/pei' component={Pei} />
          <Route
            exact
            path='/sistema-evaluacion-institucional'
            component={SistemaEvaluacionInstitucional}
          />
          <Route
            exact
            path='/proyecto-ecologico'
            component={ProyectoEcologico}
          />
          <Route
            exact
            path='/manual-convivencia'
            component={ManualConvivencia}
          />
          <Route exact path='/protocolos' component={Protocolos} />
          <Route exact path='/tratamiento-datos' component={TratamientoDatos} />

          {/* Admissions */}
          <Route exact path='/admisiones' component={Admisiones} />
          <Route exact path='/pasos' component={Pasos} />
          <Route exact path='/politicas' component={Politicas} /> 
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
