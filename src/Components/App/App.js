import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Contact from '../Contact';
import { Switch, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
    </div>
  );  
}

export default App;
