import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Places from './common/places_component.jsx'

import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/places" component={Places}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
