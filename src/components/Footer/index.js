import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Footer () {
    return (
        <footer id="footer-main">
            <div className="footer-wrapper">
                <div className="col-left">
                    <h2>
                        Segunda a Sexta-feira <br/>
                        <span className="hour">09h<span>às</span>22h</span>  
                    </h2>
                </div>

                <div className="col-right">
                    <h2>
                        Sábado e Domingo <br/>
                        <span className="hour">09h<span>às</span>02h</span>
                    </h2> 
                </div>

            </div>

            <address>
                Rua Senador Pompeu, 3000 - Benfica

                <div className="footer-contact">
                    <i className="fas fa-phone-square-alt"></i> &nbsp;                  
                    <span>85 3232-3232 &nbsp;|&nbsp; 85 9999-8888</span>
                    <i className="fab fa-whatsapp"></i>
                </div>
            </address>

            <div className="footer-social">
                <Link to='/'><i className="fab fa-instagram"></i></Link>                
                <Link to='/'><i className="fab fa-facebook-square"></i></Link>
                <Link to='/'><i className="fab fa-youtube"></i></Link>
            </div>
            
        </footer>
    );
}