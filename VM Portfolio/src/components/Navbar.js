import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="menu">
        <div className="logo"><a href="#">Vaibhav Maurya</a></div>
        <input 
          type="checkbox" 
          id="active" 
          className="check" 
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <label htmlFor="active" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <div className="wrapper">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
