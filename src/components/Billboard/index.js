import React, { useState } from 'react';
import SpeakerMobile from '../../assets/images/icons/speaker-mobile.svg';
import Speaker from '../../assets/images/icons/speaker.svg';

import './styles.css';

export default function Billboard() {
    const [icon, setIcon]=useState(window.innerWidth > 767 ? Speaker : SpeakerMobile);

    window.addEventListener('resize', function() {
        setIcon(window.innerWidth > 767 ? Speaker : SpeakerMobile);
    });

    return (
        <div id="billboard-button">                
            <img src={icon} alt="Quadro de avisos"/>
            <h3>Quadro de avisos</h3>
        </div>
    );
}