import React from 'react'
import { Link } from 'react-router-dom';

import './styles.css';

export default function Button(props) {
    return (
        <div className={`button-box ${props.offer}`}>
            <Link to={props.to}>{props.label}</Link>
        </div>
    )
}