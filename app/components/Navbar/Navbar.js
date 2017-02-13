import React from 'react';
import { Link } from 'react-router';

import './Navbar.scss';

export default class Navbar extends React.Component {

    render() {
        return (
            <div className="Navbar">
                <div className="Navbar__header">
                    <span>React Webpack 2 Seed</span>
                    <a href="https://github.com/mgerb/react-webpack2-seed">GitHub
                        <i className="fa fa-github" aria-hidden="true"/>
                    </a>
                </div>
                
                <div className="Navbar__nav">
                    <Link to="/" className="Navbar__item" onlyActiveOnIndex activeClassName="Navbar__item--active">Home</Link>
                    <Link to="/new" className="Navbar__item" activeClassName="Navbar__item--active">New</Link>
                </div>
            </div>
        );
    }
}

Navbar.propTypes = {
    children: React.PropTypes.node,
};