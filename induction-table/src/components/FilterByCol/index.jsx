import { useContext } from "react";
import { UsersContext } from "../../providers/UsersProvider";
import styles from "./styles.module.css";

export default function FilterByCol() {
    const {
        setColFilter,
        colFilter,
        userCols,
    } = useContext(UsersContext);

    const handleColFilter = (e) => {
        setColFilter(e.target.value);
    }

    return (
        <select
            className={styles.filter}
            onChange={handleColFilter}
            value={colFilter}
        >
            <option value="all">All columns</option>
            {userCols.map(col => (
                <option key={col} value={col}>
                    {[
                        col.slice(0, 1)[0].toUpperCase(),
                        col.slice(1)
                    ].join("")}
                </option>
            ))}
        </select>
    );
}