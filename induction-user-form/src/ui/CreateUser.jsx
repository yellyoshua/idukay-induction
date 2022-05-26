import { useState } from "react";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";

export default function CreateUser() {
    const [users, setUsers] = useState([]);

    return <div className="container">
        <UserForm onSubmit={(user) => setUsers(prev => ([...prev, user]))}></UserForm>
        <UserTable users={users}></UserTable>
    </div>
}