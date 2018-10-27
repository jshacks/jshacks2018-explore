import React, { Component } from 'react';

class Header extends Component {
    _getSuffix() {
        if (!this.props.suffix) return '';
        return `| ${this.props.suffix}`;
    }

    render() {
        return (
            <div className="Header">
                <h2>Exploore{this._getSuffix()}</h2>
            </div>
        );
    }
}

export default Header;
