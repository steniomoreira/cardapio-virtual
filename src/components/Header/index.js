import React from 'react';
import { Link } from 'react-router-dom';

import Billboard from './Billboard';

import LogomarcaMobile from '../../assets/images/logomarca-mobile.svg';
import Logomarca from '../../assets/images/logomarca.svg';
import MenuMobile from '../../assets/images/icons/menu-mobile.svg';
import Menu from '../../assets/images/icons/menu.svg';

import './styles.css';

export default function Header () {
    return (
        <header id='header-main'>
            <div className="container">
                <div id="topo-header">
                    <Link to='/'>
                        <img src={window.innerWidth > 767 ? Logomarca : LogomarcaMobile} alt={process.env.REACT_APP_COMPANY} />
                    </Link>

                    <img id="menu" src={window.innerWidth > 767 ? Menu : MenuMobile} alt="Nosso Menu"/>
                </div>

                <div id="header-wrapper">
                    <h2>Cardápio <span>Virtual</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, recusandae.</p>
                </div>

                <Billboard />

                <div id="header-contact">
                    <i className="fas fa-phone-square-alt"></i>                   
                    <span>85 3232-3232 | 85 9999-8888</span>
                    <i className="fab fa-whatsapp"></i>
                </div>
            </div>
        </header>
    );
}