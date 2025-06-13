import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { IdType } from "../../types/idType";
import styles from "./userInfo.module.css"
import EditUserData from "../editUserData/editUserData";

interface User {
    _id: IdType;
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
}

const UserInfo = () => {
    const { auth } = useAuth();
    const [user, setUser] = useState<User | null>(null);
    const [closed, setClosed] = useState(true);

    const userEmail = auth.email;
    const axios = useAxiosPrivate();

    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await axios.post('http://localhost:8080/client/user/email', { email: userEmail });
                setUser(res.data.user);
            } catch (err: any) {
                console.error(err);
            }
        };

        if (userEmail) {
            getUserData();
        }
    }, [auth]);

    if (!user) return <div>No user data found.</div>;

    return (
        <div className={styles["container"]}>
            <div className={styles["info-title"]}>User Info</div>
            <div className={styles["info"]}>Name:{user.name}</div>
            <div className={styles["info"]}>Email: {user.email}</div>
            <div className={styles["info"]}>Phone:{user.phoneNumber}</div>
            <div className={styles["info"]}>Address:{user.address}</div>
            <button className={styles["edit-btn"]} onClick={() => setClosed(prev => !prev)}> edit profile</button>
            {!closed &&
                <EditUserData user={user} onClose={() => {setClosed(prev => !prev)}}></EditUserData>
            }
        </div>
    );
};

export default UserInfo;






