import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Contact from '../Contact';
import Skills from '../Skills';
import { Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/competences" exact>
            <Skills />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      <Footer />
    </div>
  );  
}

export default App;
