import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
     
    <header>
      <nav>
        <h1 style={{color: 'white'}}>Vehicle Park</h1>
        <ul>
          <li className="home">
            <a href="/">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;
