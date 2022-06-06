import { useState } from "react";
import CloudUploadIcon from "../icons/CloudUploadIcon";
import PencilAltIcon from "../icons/PencilAltIcon";
import CountriesSelector from "./CountriesSelector";

const countries = {
    US: "United States",
    CA: "Canada",
    MX: "Mexico",
    EC: "Ecuador",
};

export default function UserRow({ user, handleAddUser, isLoading }) {
    const [iseEditable, setIsEditable] = useState(false);
    const [currentUser, setCurrentUser] = useState(user);

    const handleEdit = (field, value) => {
        setCurrentUser({ ...currentUser, [field]: value });
    }

    const renderEditableField = (field) => {
        if (field === "country") {
            return <td>
                <CountriesSelector
                    className="form-field custom-input-select"
                    selected={currentUser[field]}
                    onChange={(ev) => handleEdit(field, ev.target.value)}
                />
            </td>
        }
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
                    className="form-field custom-input-select input-row-edit"
                    placeholder="Enter value"
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
            title="Edit user"
        >
            <PencilAltIcon width={20} height={20}/>
        </button>
    }

    const renderSaveButton = () => {
        return <button
            className="button-icon"
            type="button"
            disabled={isLoading}
            onClick={() => {
                handleAddUser(currentUser);
                setIsEditable(false);
            }}
            title="Save user changes"
        >
            <CloudUploadIcon width={20} height={20} />
        </button>
    }

    return (
        <tr key={user._id}>
            <td>{user.code}</td>
            {iseEditable ?
                renderEditableField("name") :
                <td>{user.name}</td>}
            {iseEditable ?
                renderEditableField("country") :
                <td>{countries[user.country]}</td>}
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