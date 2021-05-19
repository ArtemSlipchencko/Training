import React from "react";
import { connect } from "react-redux";
import styles from "./userInfo.module.scss";
import selectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";

const UserInfo = function (props) {
  return (
    <div className={styles.userContainer}>
      <span>{props.name}</span>
      <button
        className={styles.logoutButton}
        onClick={() => {
          props.logout();
        }}
      >
        Выйти
      </button>
    </div>
  );
};

const mapStateToProps = function (state) {
  return { name: selectors.getName(state) };
};

const mapDispatchToProps = {
  logout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
