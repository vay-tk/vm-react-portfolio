import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="menu">
        <div className="logo">Vaibhav Maurya</div>
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
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;


