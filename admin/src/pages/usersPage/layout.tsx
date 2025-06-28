import { useEffect, useState } from "react";
import { User } from "../../models/user";
import UserItem from "../../compoments/user/userItem";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const UsersLayout = () => {

    const axios = useAxiosPrivate();
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const users = await axios.get('http://localhost:8080/admin/users')
                setUsers(users.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchUsers();
    }, [])

    const deleteUser = async (id: string) => {

        try {
            setUsers(prev => prev.filter(el => el._id !== id))
            await axios.delete(`http://localhost:8080/admin/users/${id}`)
        }
        catch(err){

        }
    }

    return (
        <div style={{ marginTop: "3.5rem", background:"white" }}>
            {users.map((user) => <UserItem key={user._id} user={user} onDelete={deleteUser} />)}
        </div>
    )
}

export default UsersLayout;