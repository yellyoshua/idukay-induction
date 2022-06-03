import { useContext, useState } from "react";
import Separator from "../components/Separator";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import RefreshIcon from "../icons/RefreshIcon";
import { UsersContext } from "../providers/UsersProvider";

export default function CreateUser() {
    const { fetchCreateUser, isLoading } = useContext(UsersContext);
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
        {isLoading && (
            <div className="center-center">
                <RefreshIcon className="spin-spin" width={17} heigth={17} />
            </div>
        )}
    </div>
}