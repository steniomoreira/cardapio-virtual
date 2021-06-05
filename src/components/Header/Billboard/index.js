import React from 'react';
import SpeakerMobile from '../../../assets/images/icons/speaker-mobile.svg';
import Speaker from '../../../assets/images/icons/speaker.svg';

import './styles.css';

export default function Billboard () {
    return (
        <div id="billboard-button">                
            <img src={window.innerWidth > 767 ? Speaker : SpeakerMobile} alt="Quadro de avisos"/>
            <h3>Quadro de avisos</h3>
        </div>
    );
}