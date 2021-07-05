import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import Iframe from 'react-iframe'
import './style.scss'

const Main = () => {
    return (
        <div className="Main_div">
            <Header as='h1'>Mes Projets:</Header>
            <Header as='h2'>Game Testing:
                <p>Projet de fin de formation développé en REACT</p>
            </Header>
            <div className="Main_div_screen">
            <Iframe url="http://game-testing.surge.sh/"
                width="500px"
                height="650px"
                id="myId"
                className="myProject"
                display="initial"
                position="relative"/>
            </div>
            <div className="Main_div_description">
                <p>Le projet à </p>
            </div>
            <a href="http://game-testing.surge.sh"><Button>Voir le site</Button></a>
        </div>
    )
}

export default Main;