import styles from "./slogan.module.css";

const Slogan = () => {
  return (
    <div className={styles["slogan-section"]}>
      <div className={styles["slogan-text"]}>
        <div className={styles["slogan-badge"]}>
          <div className={styles["badge-new"]}>New</div>
          <div className={styles["badge-label"]}>Sustainable Collection 2025</div>
        </div>

        <div className={styles["slogan-heading"]}>
          <div>Step</div>
          <div>Into</div>
          <div className={styles["text-green"]}>Comfort</div>
          <div>, </div>
          <div>Walk</div>
          <div>With</div>
          <div className={styles["text-orange"]}>Style </div>
        </div>

        <div className={styles["slogan-description"]}>
          Discover our premium collection of shoes designed for comfort, style, and sustainability.
        </div>

        <div className={styles["slogan-buttons"]}>
          <button className={styles["btn"] + " " + styles["btn-black"]}>Shop Now</button>
          <button className={styles["btn"] + " " + styles["btn-white"]}>Learn More</button>
        </div>
      </div>

      <div className={styles["slogan-image-wrapper"]}>
        <div className={styles["slogan-image"]}></div>
        <div className={styles["color-options"]}>
          <div className={styles["color-circle"] + " " + styles["green"]}></div>
          <div className={styles["color-circle"] + " " + styles["blue"]}></div>
          <div className={styles["color-circle"] + " " + styles["orange"]}></div>
          <div className={styles["color-text"]}>+12 Colors</div>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
