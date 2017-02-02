import React from 'react';
import { Link } from 'react-router';

import './Navbar.scss';

export default class Navbar extends React.Component {

    render() {
        return (
            <div className="Navbar">
                <div className="Navbar__header">Title</div>
                <Link to="/" className="Navbar__item" onlyActiveOnIndex activeClassName="Navbar__item--active">Home</Link>
                <Link to="/new" className="Navbar__item" activeClassName="Navbar__item--active">New</Link>
            </div>
        );
    }
}

Navbar.propTypes = {
    children: React.PropTypes.node,
};