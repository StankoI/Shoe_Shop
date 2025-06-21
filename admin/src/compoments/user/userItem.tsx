import { useState } from "react";
import { User } from "../../models/user"
import styles from "./userItem.module.css"
import EditUser from "../editUser/editUser";

type Props={
    user: User;
    onDelete: (id:string) => void;
}


const UserItem = ({user, onDelete}:Props) => {

    const [clicked, setClicked] = useState(false)

    return(
        <div className={styles["container"]}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phoneNumber}</div>
            <div>{user.address}</div>
            <div>{user.role}</div>
            <button onClick={() => setClicked(prev => !prev)}>Edit User</button>
            {
                clicked && <EditUser user={user} onClose={() => setClicked(prev => !prev)}/>
            }
            <button onClick={() => onDelete(user._id) }>delete</button>
        </div>
    )

}

export default UserItem;