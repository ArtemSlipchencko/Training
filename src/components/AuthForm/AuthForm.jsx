import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./authForm.module.scss";
import authOperations from "../../redux/auth/auth-operations";

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Некорректная длинна поля")
    .max(30, "Превышен лимит символов")
    .required("Введите никнейм"),
  password: Yup.string()
    .required("Введите пароль")
    .min(8, "Минимальная длина 8 символов")
    .max(16, "Превышен лимит символов"),
});

class AuthForm extends Component {
  state = {
    formType: "register",
  };

  changeType = (type) => {
    this.setState({ formType: type });
  };

  handleSubmit = (values) => {
    const { formType } = this.state;

    if (formType === "register") {
      authOperations.register(values);
    } else authOperations.login(values);
  };

  render() {
    const { formType } = this.state;

    return (
      <Formik
        initialValues={{ name: "", password: "" }}
        validationSchema={Schema}
        onSubmit={(values) => {
          this.handleSubmit(values);
        }}
      >
        <Form className={styles.authForm}>
          <div className={styles.inputWrapper}>
            <label htmlFor="name" className={styles.authLabel}>
              Имя
            </label>
            <Field
              name="name"
              type="text"
              className={styles.Auth__input}
              placeholder="Никнейм"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="name"
              component="p"
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="password" className={styles.authLabel}>
              Пароль
            </label>
            <Field
              name="password"
              type="text"
              className={styles.Auth__input}
              placeholder="Пароль"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="password"
              component="p"
            />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.authButton}>
              {formType === "register" ? "Зарегистрироваться" : "Войти"}
            </button>
            <button
              type="button"
              className={styles.authButton}
              onClick={() => {
                this.changeType(formType === "register" ? "login" : "register");
              }}
            >
              {formType === "register" ? "Вход" : "Регистрация"}
            </button>
          </div>
        </Form>
      </Formik>
    );
  }
}

export default AuthForm;
