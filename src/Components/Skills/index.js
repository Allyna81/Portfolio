import React from 'react';
import { List, Icon } from 'semantic-ui-react'
import './style.scss'; 

const Skills = () => {
    return (
    <div className="skill_container">   
    <List animated verticalAlign='middle'>
        <List.Item>
            <Icon name="html5" size="big" color="grey" />
            <List.Content>
                <List.Header className="skill_name">HTML</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
            <Icon name="css3 alternate" size="big" color="grey" />
            <List.Content>
                <List.Header className="skill_name">CSS</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
            <Icon name="js" size="big" color="grey" />
            <List.Content>
                <List.Header className="skill_name">JavaScrip</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
            <Icon name="react" size="big" color="grey" />
            <List.Content>
                <List.Header className="skill_name">React</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
            <Icon name="css3 alternate" size="big" color="grey" />
            <List.Content>
                <List.Header className="skill_name">Semantic UI</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
            <Icon name="node js" size="big" color="grey" />
            <List.Content>
                <List.Header className="skill_name">NodeJS</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
            <Icon name="node js" size="big" color="grey" />
            <List.Content>
                <List.Header className="skill_name">Express</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
            <Icon name="terminal" size="large" color="grey" />
            <List.Content>
                <List.Header className="skill_name">PostgreSQL</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
            <Icon name="terminal" size="large" color="grey" />
            <List.Content>
                <List.Header className="skill_name">SQL</List.Header>
            </List.Content>
        </List.Item>
        <List.Item>
            <Icon name="github" size="big" color="grey" />
            <List.Content>
                <List.Header className="skill_name">Github</List.Header>
            </List.Content>
        </List.Item>
    </List>
    </div> 
    )
}

export default Skills;