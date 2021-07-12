import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNav } from './styled';

const Header = () => {
  return (
    <header>
      <HeaderNav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </HeaderNav>
    </header>
  );
};

export default Header;
