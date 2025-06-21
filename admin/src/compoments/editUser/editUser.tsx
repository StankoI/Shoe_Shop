
import { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
// import { IdType } from "../../types/idType";
import styles from "./editUser.module.css"
import { User } from "../../models/user";

type Props = {
    onClose: () => void;
    user: User;
    // onChange: (user: User) => void
};

const EditUser = ({ onClose, user }: Props) => {
    const axiosPrivate = useAxiosPrivate();
    const { auth, setAuth } = useAuth();

    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
        role: user.role
    });

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axiosPrivate.put(`http://localhost:8080/admin/users/${user._id}`, formData);

            if (auth.email === user.email) {
                setAuth(prev => ({
                    ...prev,
                    name: formData.name,
                    email: formData.email,
                    address: formData.address,
                    phoneNumber: formData.phoneNumber,
                    role: formData.role
                }));
            }
            // onChange({
            //     _id: user._id,
            //     name: formData.name, 
            //     email: formData.email,
            //     address: formData.address,
            //     phoneNumber: formData.phoneNumber,
            //     role: formData.role
            // })


            onClose();
        } catch (err: any) {
            console.error("Failed to update user:", err);
            setError("Update failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles["blur-container"]}>
            <div className={styles["container"]}>
                <div className={styles["title"]}>Edit User Information</div>

                <form onSubmit={handleSubmit} className={styles["form"]}>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className={styles["input"]}
                    />
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className={styles["input"]}
                    />
                    <input
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className={styles["input"]}
                    />
                    <input
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className={styles["input"]}
                    />
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={styles["input"]}
                    >
                        <option value="client">Client</option>
                        <option value="admin">Admin</option>
                    </select>

                    {error && <p className={styles["error"]}>{error}</p>}

                    <div className={styles["buttonGroup"]}>
                        <button
                            type="submit"
                            disabled={loading}
                            className={styles["saveButton"]}
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className={styles["cancelButton"]}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
