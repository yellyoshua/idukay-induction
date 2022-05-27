import { useCallback, useContext, useState } from "react";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import { UsersContext } from "../providers/UsersProvider";

export default function CreateUser() {
    const {addUser} = useContext(UsersContext);
    const [userEdit, setUserEdit] = useState(null);

    const handleAddUser = (newUser) => {
        addUser(newUser);
        setUserEdit(null);
    }

    return <div className="container">
        <UserForm initialState={userEdit} onSubmit={handleAddUser}></UserForm>
        <UserTable setUserEdit={setUserEdit}></UserTable>
    </div>
}