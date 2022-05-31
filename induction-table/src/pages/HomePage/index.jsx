import FilterByCol from "../../components/FIlterByCol";
import SearchButton from "../../components/SearchButton";
import SearchUser from "../../components/SearchUser";
import UsersTable from "../../components/UsersTable";
import styles from "./styles.module.css";

export default function HomePage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Users management
            </h1>
            <div className={styles.container_center}>
                <header className={styles.search_bar}>
                    <SearchUser />
                    <FilterByCol />
                    <SearchButton />
                </header>
                <UsersTable />
            </div>
        </div>
    )
}