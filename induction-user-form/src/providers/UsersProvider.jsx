import { randomId } from "../utils";
import { createContext, useEffect, useState } from "react";
import { createUser, getUsers, updateUser } from "../services/users.services";


export const UsersContext = createContext({});

export default function UsersProvider(props) {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = async () => {
        setIsLoading(true);
        const newUsers = await getUsers();
        setUsers(newUsers);
        setIsLoading(false);
    }

    const fetchUpdateUser = async (user_id, data) => {
        setIsLoading(true);
        await updateUser(user_id, data);
        setIsLoading(false);
        await fetchUsers();
    }

    const fetchCreateUser = async (user) => {
        setIsLoading(true);
        if (user._id) await fetchUpdateUser(user._id, user);
        else await createUser(user);
        setIsLoading(false);
        await fetchUsers();
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <UsersContext.Provider value={{
            users,
            isLoading,
            fetchCreateUser,
        }}>
            {props.children}
        </UsersContext.Provider>
    );
}