import React, { createContext, useEffect } from 'react';

const userCols = ["name", "email", "interest", "profile"];

export const UsersContext = createContext({
    search: '',
    colFilter: 'all',
    sort: { col: 'name', ascendent: true },
    users: [],
    filteredUsers: [],
    userCols,
});

export default function UsersProvider({ children, users }) {
    const [state, setState] = React.useState({
        search: '',
        colFilter: 'all',
        sort: { col: 'name', ascendent: true },
        users: users || [],
        filteredUsers: users || [],
        userCols,
    });

    const setColFilter = (colFilter) => {
        setState({
            ...state,
            colFilter,
        })
    }

    const setColSort = (col) => {
        setState((prev) => {
            const ascendent = !prev.sort.ascendent;
            const newUsers = prev.filteredUsers.sort((a, b) => {
                return ascendent ? 
                    a[col].localeCompare(b[col]) :
                    b[col].localeCompare(a[col]);
            })
            return {
                ...prev,
                sort: { col, ascendent },
                filteredUsers: newUsers,
            }
        })
    }

    const setSearch = (search) => {
        setState({
            ...state,
            search,
        })
    }

    const setFilteresUsers = (filteredUsers) => {
        setState({
            ...state,
            filteredUsers,
        })
    }

    useEffect(() => {
        setColSort(state.sort.col)
    }, [])

    return (
        <UsersContext.Provider value={{
            ...state,
            setColSort,
            setColFilter,
            setFilteresUsers,
            setSearch,
        }}>
            {children}
        </UsersContext.Provider>
    )
}