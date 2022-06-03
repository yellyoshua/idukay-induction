import { useContext } from "react";
import { UsersContext } from "../providers/UsersProvider";
import PencilAltIcon from "./Icons/PencilAltIcon";

export default function UserTable({ setUserEdit }) {
    const { users = [], isLoading } = useContext(UsersContext);

    const renderUser = (user) => {
        const renderEditButton = () => {
            return <button
                className="button-icon"
                type="button"
                disabled={!user.editable}
                onClick={() => setUserEdit(user)}
            >
                <PencilAltIcon width={20} height={20}/>
            </button>
        }
        return (
            <tr key={user._id}>
                <td>{user._id}</td>
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
            <tr className="text-center">
                {isLoading && <td colSpan={10}>Loading...</td>}
            </tr>
        </tbody>
    </table>
}