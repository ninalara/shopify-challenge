/* eslint react/prop-types: 0 */
import React from 'react';
import logo from '../template/logo.png';

const Header: React.FC = () => {
    return (
        <div className="header row">
            <div className="col-12">
                <img width="250" src={logo}></img>
            </div>
        </div>
    );
};

export default Header;
