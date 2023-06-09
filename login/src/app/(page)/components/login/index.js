"use client";
import styles from "./home.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Link from "next/link";
import LoadingHome from "../../../loading";
import { Suspense, useState } from "react";
import {setCookie} from "nookies"
import Axios from "axios";

export default function Login() {
  const [usuario, setUsuario] = useState();

  function handleClickLogin(values) {
    Axios.post("http://localhost:3001/api/login", {
      name: values.name,
      email: values.email,
      password: values.password,
    }).then((response) => {
      validationUser(response.data);
    });
  }

  function validationUser(use) {
    if (typeof use == "string") {
      alert(use);
    } else {
      setCookie( null, "usuario", JSON.stringify(use),{
        maxAge: 86400,
        path: "/"
      } )
    }
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
    <Suspense fallback={<LoadingHome />}>
      <div className={styles.container}>
        <Formik
          initialValues={{}}
          onSubmit={handleClickLogin}
          validateOnChange={validationLogin}
        >
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
                  placeholder="Email"
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
                  placeholder="Password"
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
              <Link href="/register" className={styles.link}>
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
    </Suspense>
  );
}
