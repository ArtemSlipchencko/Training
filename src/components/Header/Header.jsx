import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import UserInfo from "../UserInfo";
import authOperations from "../../redux/auth/auth-operations";
import selectors from "../../redux/auth/auth-selectors";

const Header = function (props) {
  if(props.token) {
    props.current();
  }

  return (
    <div className={styles.headerWrapper}>
      <a href="/">
        <span className={styles.logo}>waxa40k</span>
      </a>
      {props.token && (
        <>
          <div className={styles.navContainer}>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </div>
          <UserInfo />
        </>
      )}
    </div>
  );
};

const mapStateToProps = function (state) {
  return { token: selectors.getToken(state) };
};

const mapDispatchToProps = {
  current: authOperations.current,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
