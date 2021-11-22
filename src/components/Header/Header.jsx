import React from 'react';
import './Header.scss';
import User from '../User/User';


const Header = (props) => {
    return (
        <div className="header">
            <a className="logo-text" href="#">EPİAŞ</a>
            <User/>
        </div>
    )
}
export default Header;