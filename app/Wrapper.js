import React from 'react';
import Navbar from './components/Navbar/Navbar';

//styling
import './scss/index.scss';

export default class Wrapper extends React.Component {

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
