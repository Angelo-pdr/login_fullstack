import styles from "./loading.module.css";

export default function LoadingHome() {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.areaImg}>
          <div className={styles.imgLoad}></div>
          <div className={styles.titleLoad}></div>
          <div className={styles.subTitleLoad}></div>
        </div>
        <div className={styles.form}>
          <div className={styles.h1Load}></div>
          <div className={styles.login__form}>
            <div className={styles.inputLoad}></div>
          </div>
          <div className={styles.login__form}>
            <div className={styles.inputLoad}></div>
          </div>
          <div className={styles.inputLoad}></div>
          <div className={styles.linkLoad}></div>
        </div>
      </div>
      <div className={styles.slides}>
        <div className={styles.list}>
          <div className={styles.slideLoad}></div>
        </div>
      </div>
    </div>
  );
}
