import React from 'react';
import { List, Button, Icon } from 'semantic-ui-react';
import './style.scss'; 

const Contact = () => {
    return (
        <div className="contact_container">
            <List className="contact_list">
                <a href='mailto:fournier.remy81@gmail.com'>
                <Button color='google plus'>
                    <Icon name='google plus'/> Gmail 
                </Button></a>

                <a href='https://www.linkedin.com/in/r%C3%A9my-fournier-397917203/'>
                <Button color='linkedin'>
                    <Icon name='linkedin'/> Linkedin 
                </Button></a>

                <a href='https://github.com/Allyna81'>
                <Button >
                    <Icon name='github'/> Github 
                </Button></a>
            </List>           
        </div>
    )
}

export default Contact;
