import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Wrapper from './Wrapper';
import NotFound from './pages/NotFound/NotFound';

//pages
import Home from './pages/Home/Home';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Wrapper}>
            <IndexRoute component={Home}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
, document.getElementById('app'));
