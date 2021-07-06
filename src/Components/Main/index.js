import React from 'react';
import {  Button, Image, Icon, Label } from 'semantic-ui-react';
import Screen from '../assets/GameTesting-Screen.png'
import './style.scss'

const Main = () => {
    return (
        <div className="Main_div">
            <div className="header_container">
                <h1>Mes Projets:</h1>
            </div>
            <div className="project_card">
            <h2>Game Testing:</h2>
                <p>Projet de fin de formation O'clock réalisé en :</p>
            <div className="Main_div_screen">
                
            </div>
            <div className="Main_div_description">
                <div className="screen_container">
                    <Image src={Screen} size="small" />
                </div>
                <div className="tech_container">
                <div>
                    <Label><Icon name="react" />React</Label>
                </div>
                <div>
                    <Label><Icon name="js" />JavaScript</Label>
                </div>
                <div>
                    <Label><Icon name="css3 alternate" />Semantic UI</Label>
                </div>
                </div>
            </div>
            <div className="button_container">
                <a href="http://game-testing.surge.sh">
                    <Button>
                        <Icon name="internet explorer" />Voir le site
                    </Button>
                </a>
                <a href='https://github.com/Allyna81'>
                    <Button >
                        <Icon name='github'/> Github 
                    </Button>
                </a>
            </div>
            </div>
        </div>
    )
}

export default Main;