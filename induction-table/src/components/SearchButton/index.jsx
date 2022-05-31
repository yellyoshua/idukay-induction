import useUsersFilter from "../../hooks/useUsersFilter";
import styles from "./styles.module.css";

export default function SearchButton() {
    const { handleSearchButton } = useUsersFilter();

    return <button
        className={styles.search_button}
        onClick={handleSearchButton}
        type="button"
    >
        Search
    </button>
}