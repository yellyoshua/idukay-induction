import { useState } from "react";
import PencilAltIcon from "./Icons/PencilAltIcon";

export default function UserRow({ user, handleAddUser }) {
    const [iseEditable, setIsEditable] = useState(false);
    const [currentUser, setCurrentUser] = useState(user);

    const handleEdit = (field, value) => {
        setCurrentUser({ ...currentUser, [field]: value });
    }

    const renderField = (field) => {
        if (iseEditable) {
            return (
                <input
                    type="text"
                    value={currentUser[field]}
                    onChange={({target: {value}}) => handleEdit(field, value)}
                />
            )
        }
        return user[field];
    }

    return (
        <tr key={user._id}>
            <td>{user._id}</td>
            <td>{renderField("name")}</td>
            <td>{renderField("country")}</td>
            <td>{user.editable ? "Yes" : "No"}</td>
            {/* <td>{user.name}</td>
            <td>{user.country || "N/A"}</td>
            <td>{user.editable ? "Yes" : "No"}</td> */}
            <td>
                <button
                    className="button-icon"
                    type="button"
                    disabled={!user.editable}
                    onClick={() => setIsEditable(true)}
                >
                    <PencilAltIcon width={20} height={20}/>
                </button>
            </td>
        </tr>
    )
}