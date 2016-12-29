import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {

    render() {
        return (
            <div className="Navbar">
                <Link to="/" className="Navbar__item" onlyActiveOnIndex activeClassName="active">Home</Link>
                <Link to="/new" className="Navbar__item" activeClassName="active">New</Link>
            </div>
        );
    }
}

Navbar.propTypes = {
    children: React.PropTypes.node,
};