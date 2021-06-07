import React from 'react';
import { Link } from 'react-router-dom';
import Billboard from '../../components/Billboard';

import Logomarca from '../../assets/images/logomarca-dark.svg';
import Menu from '../../assets/images/icons/menu-dark.svg';

import './styles.css';

export default function Header() {
    return (
        <header id='header-main'>
            <div className="container">
                <div id="topo-header">
                    <Link to='/'>
                        <img src={Logomarca} alt={process.env.REACT_APP_COMPANY} />
                    </Link>

                    <img src={Menu} alt="Nosso Menu"/>
                </div>

                <Billboard />  
            </div>
        </header>
    );
}