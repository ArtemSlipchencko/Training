import React from "react";
import AuthForm from "../../AuthForm";
import styles from "./auth.module.scss";

const Auth = () => {
  return (
    <div className="container">
      <div className={styles.formWrapper}>
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
