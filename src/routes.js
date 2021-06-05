import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import Category from './pages/Category';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/:category?' exact component={Category} />
            </Switch>
        </BrowserRouter>
    );
}