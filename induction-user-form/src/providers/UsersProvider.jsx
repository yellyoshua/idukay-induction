import { randomId } from "../utils";
import { createContext, useState } from "react";


export const UsersContext = createContext({});

export default function UsersProvider(props) {
    const [users, setUsers] = useState([]);

    const addUser = (newUser) => {
        const existingUser = users.find(user => user.id === newUser.id);
        if (existingUser) {
            setUsers(users.map(user => user.id === newUser.id ? newUser : user));
        } else {
            setUsers([...users, {...newUser, id: randomId()}]);
        }
    }

    const removeUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    }

    return (
        <UsersContext.Provider value={{ users, addUser, removeUser }}>
            {props.children}
        </UsersContext.Provider>
    );
}