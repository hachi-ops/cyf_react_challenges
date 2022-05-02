import React from 'react';
import moon from '../moon-dark-icon.png';
import '../App.css';

function Header() {
  return (
        <div className="header">
            <div className='header-container'>
                <h1 className='logo'>Where in the World?</h1>
                <div className='switch-mode'>
                    <div><img src={moon} alt={"dark-mode-icon"} width={28}/></div>
                <h2>Dark Mode</h2>
                    </div>
            </div>          
        </div>
  )
}

export default Header