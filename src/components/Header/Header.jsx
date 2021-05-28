import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import "./header.css";
import UserInfo from "../UserInfo";
import authOperations from "../../redux/auth/auth-operations";
import selectors from "../../redux/auth/auth-selectors";
import { Component } from "react";

class Header extends Component {
  componentDidMount() {
    if (this.props.token) {
      this.props.current();
    }
  }

  render() {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <a href="/">
            <span className={styles.logo}>myBlog</span>
          </a>
          {this.props.token && (
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
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return ({ token: selectors.getToken(state) });
};

const mapDispatchToProps = {
  current: authOperations.current,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
