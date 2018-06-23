import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="header-container">
    <h1>
      <FontAwesomeIcon icon={faCheckCircle} />
      &nbsp; TD TD &nbsp;
      <FontAwesomeIcon icon={faTimesCircle} />
    </h1>
  </div>
);

Header.displayName = 'Header';
export default Header;
