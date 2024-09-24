import React from 'react';
import NavbarHome1 from '../NavbarHome1/NavbarHome1';
import NavbarHome2 from '../NavbarHome2/NavbarHome2';
import Navbar from '../Navbar/Navbar';

const Header = ({ page }) => {
  return (
    <header>
      {page === 'home1' && <NavbarHome1 />}
      {page === 'home2' && <NavbarHome2 />}
      {!['home1', 'home2'].includes(page) && <Navbar />}
    </header>
  );
};

export default Header;
