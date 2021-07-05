// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
// Composants
import App from './Components/App/App'
import 'semantic-ui-css/semantic.min.css';


// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
// on vient englober notre application avec le composant BrowserRouter
// celui-ci va fournir tous les objets history, location et match
// nécessaires aux autres composants de react-router-dom
const rootComponent = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// Le rendu de React => DOM
render(rootComponent, target);
