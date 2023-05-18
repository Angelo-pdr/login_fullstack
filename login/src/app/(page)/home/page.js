"use client";
import styles from "./home.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../../globals.css";
import Link from "next/link";

export default function Home() {
  function handleClickLogin(values) {
    console.log(values);
  }

  const validationLogin = () =>
    yup.object().shape({
      email: yup
        .string()
        .email("Não e uma email")
        .required("este campo e obrigatorio"),

      password: yup
        .string()
        .min(8, "Minimo de 8 caracteres")
        .required("este campo e obrigatorio"),
    });

  return (
    <div className={styles.container}>
      <Formik initialValues={{}} onSubmit={handleClickLogin}>
        <div className={styles.login}>
          <div className={styles.areaImg}>
            <img src="/img/logo.png" className={styles.img} />
            <h2 className={styles.title}>Welcome to</h2>
            <h2 className={styles.subTitle}>South Maze</h2>
          </div>
          <Form className={styles.form}>
            <h1 className={styles.h1}>Log in to your account.</h1>
            <div className={styles.login__form}>
              <Field
                name="email"
                className={styles.input}
                placeHolder="Email"
              />

              <ErrorMessage
                componet="span"
                name="email"
                className="login-error"
              />
            </div>
            <div className={styles.login__form}>
              <Field
                name="password"
                className={styles.input}
                placeHolder="Password"
              />

              <ErrorMessage
                componet="span"
                name="password"
                className="login-error"
              />
            </div>
            <input
              type="submit"
              value="Log in"
              className={styles.inputButton}
            />
            <Link href="/" className={styles.link}>
              Don't have an account? Create an account
            </Link>
          </Form>
        </div>
      </Formik>
      <div className={styles.slides}>
        <div className={styles.list}>
          <img src="/img/img1.png" className={styles.img1} />
          <img src="/img/img2.png" className={styles.img1} />
          <img src="/img/img3.png" className={styles.img1} />
        </div>
      </div>
    </div>
  );
}
