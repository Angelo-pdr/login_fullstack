"use client";
import styles from "./register.module.css";
import { Suspense } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

import Link from "next/link";
import LoadingRegister from "./loading";

const Register = () => {
  async function handleClickRegister(values) {
    Axios.post("http://localhost:3001/api/user", {
      name: values.name,
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  }

  const validationLogin = () =>
    yup.object().shape({
      name: yup.string().required("este campo e obrigatorio"),
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
    <Suspense fallback={<LoadingRegister />}>
      <div className={styles.container}>
        <Formik
          initialValues={{}}
          onSubmit={handleClickRegister}
          validateOnChange={validationLogin}
        >
          <div className={styles.login}>
            <div className={styles.areaImg}>
              <img src="/img/logo.png" className={styles.img} />
              <h2 className={styles.title}>Welcome to</h2>
              <h2 className={styles.subTitle}>South Maze</h2>
            </div>
            <Form className={styles.form}>
              <h1 className={styles.h1}>Sign up and start learning</h1>
              <div className={styles.login__form}>
                <Field
                  name="name"
                  placeHolder="Full Name"
                  className={styles.input}
                />

                <ErrorMessage
                  componet="span"
                  name="name"
                  className="login-error"
                />
              </div>
              <div className={styles.login__form}>
                <Field
                  name="email"
                  placeHolder="Email"
                  className={styles.input}
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
                  placeHolder="Password"
                  className={styles.input}
                />

                <ErrorMessage
                  componet="span"
                  name="password"
                  className="login-error"
                />
              </div>
              <input
                type="submit"
                value="Sign up"
                className={styles.inputButton}
              />
              <Link href="/" className={styles.link}>
                Already have an account? Log in.
              </Link>
            </Form>
          </div>
        </Formik>
      </div>
    </Suspense>
  );
};

export default Register;
