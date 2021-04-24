import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./userInfo.module.scss";

const UserInfo = function (props) {
  return (
    <div className={styles.userContainer}>
      <span>Admin</span>
      <button>Выйти</button>
    </div>
  );
};

export default connect(null, null)(UserInfo);
