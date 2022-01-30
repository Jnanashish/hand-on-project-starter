import React from 'react';

// import css
import styles from "./header.module.css"

import logo from "../../Image/logo.svg"

const Header = () => {
  return <div className = {styles.header}>
      <img src={logo} alt="Cuvette Logo"/>
      <button className = {styles.button}>Login/Signup</button>
  </div>;
}

export default Header;
