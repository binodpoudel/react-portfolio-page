import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Home, About, Contact, Project, NavBar, Skills, Footer } from './components/index';
import './style/index.css'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
   
    <HashRouter>
      <NavBar />
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/project' component={Project} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/skills' component={Skills} />
      <Redirect to= '/' />
     </Switch> 
    <Footer /> 
  </HashRouter> 
   
  );
}

export default App;
