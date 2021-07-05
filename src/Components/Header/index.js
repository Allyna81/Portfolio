import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './title.scss'
import './style.scss'

const Header = () => {
    return (
    <div>
        <div id="app">
	        <div id="wrapper">
		        <h1 className="glitch" data-text="Rémy FOURNIER">Rémy FOURNIER</h1>
		        <span className="sub">Développeur web Frontend REACT/JS</span>
	        </div>
        </div>
        <Menu inverted className="menu">
        <Link to={"/"}>
          <Menu.Item
            name='Accueil'
          />
        </Link>
        <Link to={"/competences"}>
          <Menu.Item
            name='Mes compétences'
          />
        </Link>
        <Link to={"/contact"}>
          <Menu.Item
            name='Contact'
          />
        </Link>
        </Menu>
    </div>
    
    )
}

export default Header;