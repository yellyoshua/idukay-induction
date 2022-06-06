import { useContext } from "react";
import { UsersContext } from "../providers/UsersProvider";
import UserRow from "./UserRow";

export default function UserTable({ setUserEdit }) {
    const {
        users = [],
        isLoading,
        fetchCreateUser,
    } = useContext(UsersContext);

    const renderUserRow = (user) => {
        return <UserRow
            user={user}
            key={user._id}
            isLoading={isLoading}
            handleAddUser={fetchCreateUser}
        />
    }

    return <table>
        <thead>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Country</th>
                <th>Editable</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.map(renderUserRow)}
        </tbody>
    </table>
}