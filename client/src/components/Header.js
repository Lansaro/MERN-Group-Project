import Logo from '../Logo.png';
import React from 'react';

const Header = () => {
    return (
        <div className='App-header'>
            <div>
                <img backgroundColor='transparent' src={Logo} className='App-logo' alt='logo' />
                <h1>Travel Memories</h1>
            </div>
        </div>
    )
};

export default Header;