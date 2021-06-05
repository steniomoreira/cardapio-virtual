import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Button from '../../components/Button';

import './styles.css';

//API FAKE
import * as data from '../../data';

export default function Landing () {
    return (
        <div id="page-landing">
            <Header />
            <main>                
                <div className="container">

                    <div className="filters-content">
                        <Button to='/' label="Ofertas" offer="offer"/>
                        <Button to='/' label="Entradas" />
                        <Button to='/' label="Carnes" />
                        <Button to='/' label="Bebidas" />
                        <Button to='/' label="Pizzas" />
                    </div>

                    <div className="card-content">
                        {data.listEspecial.map((card, index) => (
                            <Card key={index} data={card} />
                        ))}
                    </div>
                    
                </div>
            </main>
            <Footer />
        </div>
    );
}