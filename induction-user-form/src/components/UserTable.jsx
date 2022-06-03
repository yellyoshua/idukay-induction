import { useContext } from "react";
import { UsersContext } from "../providers/UsersProvider";
import PencilAltIcon from "./Icons/PencilAltIcon";
import UserRow from "./UserRow";

export default function UserTable({ setUserEdit }) {
    const { users = [] } = useContext(UsersContext);

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
            {users.map(user => {
                return <UserRow user={user} handleAddUser={() => {}} key={user._id} />
            })}
            {/* {users.map(user => renderUser(user))} */}
        </tbody>
    </table>
}