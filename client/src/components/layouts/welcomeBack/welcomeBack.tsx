
import styles from "./welcomeBack.module.css"

const WelcomeBack = () => {
    return(
        <div className={styles["welcome-container"]}>
            <div className={styles["title"]}>Welcome Back</div>
            <div className={styles["text"]}>Sign in to your account to continue your sustainable shopping journey</div>
        </div>
    );
}

export default WelcomeBack;