import { useContext } from "react";
import { UsersContext } from "../../providers/UsersProvider";
import styles from "./styles.module.css";

export default function SearchUser() {
    const {
        search,
        setSearch,
        colFilter,
    } = useContext(UsersContext);

    const handleSearchUser = (e) => {
        setSearch(e.target.value);
    }
    return (
        <input
            className={styles.search_user}
            placeholder={colFilter === "all" ? "Search all columns" : "Search " + colFilter}
            onChange={handleSearchUser}
            value={search}
            autoComplete="off"
        />
    )
}