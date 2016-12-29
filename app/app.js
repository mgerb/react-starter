import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//pages
import Home from './pages/Home';
import New from './pages/New';
import Default from './pages/Default';

//components
import Navbar from './components/Navbar';

//styling
import './scss/index.scss';

class Wrapper extends React.Component {

    render() {
        return (
            <div>
                <Navbar/>
                {this.props.children}
            </div>
        );
    }
}

Wrapper.propTypes = {
    children: React.PropTypes.node,
};

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Wrapper}>
            <IndexRoute component={Home}/>
            <Route path="/new" component={New}/>
            <Route path="*" component={Default}/>
        </Route>
    </Router>
, document.getElementById('app'));
