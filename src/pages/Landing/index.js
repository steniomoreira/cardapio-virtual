import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

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
                        <Button to='/ofertas' label="Ofertas" offer="offer"/>
                        <Button to='/entradas' label="Entradas" />
                        <Button to='/carnes' label="Carnes" />
                        <Button to='/bebidas' label="Bebidas" />
                        <Button to='/pizzas' label="Pizzas" />
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