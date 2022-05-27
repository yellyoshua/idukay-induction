import { useContext } from "react";
import Separator from "../components/Separator";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import { UsersContext } from "../providers/UsersProvider";

export default function CreateUser() {
    const {addUser} = useContext(UsersContext);

    const handleAddUser = (newUser) => {
        addUser(newUser);
    }

    return <div className="container">
        <UserForm onSubmit={handleAddUser}></UserForm>
        <Separator />
        <UserTable />
    </div>
}