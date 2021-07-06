import React from 'react';
import { Icon } from 'semantic-ui-react';
import './style.scss'

const Footer = () => {
    return (
        <div className="footer_container">
            <p><Icon name="copyright outline" />Copyright Rémy Fournier 2021</p>
        </div>
    )
}

export default Footer;