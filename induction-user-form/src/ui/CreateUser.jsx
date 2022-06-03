import { useContext, useState } from "react";
import Separator from "../components/Separator";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import { UsersContext } from "../providers/UsersProvider";

export default function CreateUser() {
    const { fetchCreateUser } = useContext(UsersContext);
    const [userEdit, setUserEdit] = useState(null);

    const handleAddUser = (newUser) => {
        fetchCreateUser(newUser);
        setUserEdit(null);
    }

    const handlerUserEdit = (user) => {
        setUserEdit(user);
    }

    return <div className="container">
        <UserForm initialState={userEdit} onSubmit={handleAddUser}></UserForm>
        <Separator />
        <UserTable setUserEdit={handlerUserEdit} />
    </div>
}