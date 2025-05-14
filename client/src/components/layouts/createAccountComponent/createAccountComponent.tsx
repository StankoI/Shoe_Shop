import styles from "./createAccountComponent.module.css"

const CreateAccount = () => {
    return(
        <div className={styles["create-account-container"]}>
            <div className={styles["title"]}>Create Your Account</div>
            <div className={styles["text"]}>Join our community of eco-conscious shoppers and start your sustainable journey</div>
        </div>
    );
}

export default  CreateAccount;