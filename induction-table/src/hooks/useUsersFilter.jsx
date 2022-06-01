import { useCallback, useContext } from "react";
import { UsersContext } from "../providers/UsersProvider";

export default function useUsersFilter() {
    const {
        users,
        colFilter,
        search,
        sort,
        setColSort,
        filteredUsers,
        setFilteresUsers,
    } = useContext(UsersContext);

    const handleSearchButton = () => {
        const newUsers = users.filter((user) => {
            let searchable = colFilter === "all" ?
                [
                    user.name,
                    user.email,
                    user.profile,
                    user.interest,
                ].join(" ") :
                user[colFilter];
            return searchable.toLowerCase().includes(
                search.toLowerCase()
            );
        });
        setFilteresUsers(newUsers);
    }

    const handleSortButton = (col) => {
        setColSort(col);
    };

    return {
        sort,
        filteredUsers,
        handleSearchButton,
        handleSortButton,
    };
}