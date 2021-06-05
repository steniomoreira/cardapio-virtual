import React from 'react';
import { Link } from 'react-router-dom';
import LinkPlus from '../../assets/images/icons/link-plus.svg';

import './styles.css';

export default function Card({data}) {
  return (
    <div className="card">
        <div className="content-image">
            <Link to={`/${data.item}`}>
                <img src={data.image} alt={data.item}/>
            </Link>
        </div>
        <div className="card-wrapper">
            <h2 className="card-item">
                {data.item}
                <span className="unit">
                    {data.unit ?? data.unit}
                </span>
            </h2>
            <u className="card-option">
                {data.especialItems.map((item, index) => (
                    <li key={index}>
                        <h3>
                            {item.option} &nbsp;
                            {item.offer ? <span>Oferta</span> : ''} 
                        </h3>
                        <p>{item.description}</p>
                        <span className="card-account"> R$ {item.price}</span>
                    </li>
                ))}
            </u>                            
        </div>
        <div className="link-plus">
            <Link to={`/${data.item}`} > <img src={LinkPlus} alt="Mais itens"/> </Link>
            <Link to={`/${data.item}`} > <i className="fas fa-plus"></i> </Link>
        </div>                        
    </div>
  );
}