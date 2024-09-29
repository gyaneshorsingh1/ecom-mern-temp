import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the nav menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="top-bar">
        {/* Logo */}
        <div className="logo">
          <Link to="/">BabyBloom</Link>
        </div>

        {/* Icon Section */}
        <div className="icon-links">
          <FaSearch className="icon" size={20} />
          <Link to="/profile">
            <FaUser className="icon" size={20} />
          </Link>
          <Link to="/cart">
            <FaShoppingCart className="icon" size={20} />
          </Link>
          
        </div>
      </div>

      {/* Navigation Links */}
      <nav>
      <FaBars className="hamburger" size={25} onClick={toggleNav} />
        <ul className={isNavOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/shop-all">Shop All</Link></li>
          <li><Link to="/everyday-wellness">Everyday Wellness</Link></li>
          <li><Link to="/feeding-rituals">Feeding Rituals</Link></li>
          <li><Link to="/organic-clothing">Organic Clothing</Link></li>
          <li><Link to="/baby-nursery">Baby Nursery</Link></li>
          <li><Link to="/combo">Combo</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
