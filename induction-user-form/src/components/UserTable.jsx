import { useContext } from "react";
import { UsersContext } from "../providers/UsersProvider";
import PencilAltIcon from "./Icons/PencilAltIcon";

export default function UserTable({ setUserEdit }) {
    const {users = []} = useContext(UsersContext);


    const handleSetUserEdit = (user) => {
        setUserEdit(user);
    }

    const renderUser = (user) => {
        const renderEditButton = () => {
            return <button
                className="button-icon"
                type="button"
                disabled={!user.editable}
                onClick={() => handleSetUserEdit(user)}
            >
                <PencilAltIcon width={20} height={20}/>
            </button>
        }
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.country || "N/A"}</td>
                <td>{user.editable ? "Yes" : "No"}</td>
                <td>
                    {renderEditButton()}
                </td>
            </tr>
        )
    }

    return <table>
        <thead>
            <tr>
                <th>
                    Id
                </th>
                <th>
                    Name
                </th>
                <th>
                    Country
                </th>
                <th>
                    Editable
                </th>
                <th>
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => renderUser(user))}
        </tbody>
    </table>
}