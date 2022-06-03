import { useState } from "react";
import PencilAltIcon from "./Icons/PencilAltIcon";

export default function UserRow({ user, handleAddUser }) {
    const [iseEditable, setIsEditable] = useState(false);
    const [currentUser, setCurrentUser] = useState(user);

    const handleEdit = (field, value) => {
        setCurrentUser({ ...currentUser, [field]: value });
    }

    const renderEditableField = (field) => {
        if (field === "editable") {
            return (
                <td>
                    <input
                        type="checkbox"
                        checked={currentUser[field]}
                        onChange={({target: {checked}}) => handleEdit(field, checked)}
                    />
                </td>
            )
        }
        return (
            <td>
                <input
                    type="text"
                    value={currentUser[field]}
                    onChange={({target: {value}}) => handleEdit(field, value)}
                />
            </td>
        )
    }

    const renderEditButton = () => {
        return <button
            className="button-icon"
            type="button"
            disabled={!user.editable}
            onClick={() => setIsEditable(true)}
        >
            <PencilAltIcon width={20} height={20}/>
        </button>
    }

    const renderSaveButton = () => {
        return <button
            className="button-icon"
            type="button"
            disabled={!user.editable}
            onClick={() => {
                handleAddUser(currentUser);
                setIsEditable(false);
            }}
        >
        🤩
        </button>
    }

    return (
        <tr key={user._id}>
            <td>{user._id}</td>
            {iseEditable ?
                renderEditableField("name") :
                <td>{user.name}</td>}
            {iseEditable ?
                renderEditableField("country") :
                <td>{user.country}</td>}
            {iseEditable ?
                renderEditableField("editable") :
                <td>{user.editable ? "Yes" : "No"}</td>}
            <td>
                {iseEditable ?
                    renderSaveButton() :
                    renderEditButton()}
            </td>
        </tr>
    )
}