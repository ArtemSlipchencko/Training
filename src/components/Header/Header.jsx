import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import UserInfo from "../UserInfo";

const Header = function (props) {
  return (
    <div className={styles.headerWrapper}>
      <span className={styles.logo}>WAXA40k</span>
      <div className={styles.navContainer}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/auth" className={styles.navLink}>
          Auth
        </NavLink>
      </div>
      <UserInfo />
    </div>
  );
};

export default connect(null, null)(Header);
