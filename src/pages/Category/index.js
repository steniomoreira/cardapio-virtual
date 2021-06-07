import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import pizza from '../../assets/images/cards/pizza.jpg';

import './styles.css';

//API FAKE
import * as data from '../../data';

export default function Category () {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div id="page-category">
            <Header />
            <main>                
                <div className="container">

                 result
                    
                </div>
            </main>
            <Footer />
        </div>
    );
}