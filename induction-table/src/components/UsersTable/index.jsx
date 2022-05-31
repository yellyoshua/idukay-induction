import { useCallback, useContext, useMemo } from "react";
import useUsersFilter from "../../hooks/useUsersFilter";
import { UsersContext } from "../../providers/UsersProvider";
import ChevronDownIcon from "../../Icons/ChevronDownIcon";
import ChevronUpIcon from "../../Icons/ChevronUpIcon";
import styles from "./styles.module.css"

export default function UsersTable() {
    const {
        sort,
        filteredUsers,
        handleSortButton,
    } = useUsersFilter();

    const renderTHLabelButton = (label, value, disabled = false) => {
        const chevronIcon = 
            sort.col === value && sort.ascendent ? 
            <ChevronDownIcon size={15} /> : 
            <ChevronUpIcon size={15} />;
        return (
            <button
                className={styles.sort_button}
                disabled={disabled}
                onClick={() => handleSortButton(value)}
            >
                {label} {!disabled && chevronIcon}
            </button>
        )
    };

    return (
        <div className={styles.users_table_container}>
            <table className={styles.users_table}>
                <thead>
                    <tr>
                        <th>
                            {renderTHLabelButton("Id", "id", true)}
                        </th>
                        <th>
                            {renderTHLabelButton("Name", "name")}
                        </th>
                        <th>
                            {renderTHLabelButton("Email", "email")}
                        </th>
                        <th>
                            {renderTHLabelButton("Interest", "interest")}
                        </th>
                        <th>
                            {renderTHLabelButton("Profile", "profile")}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user, key) => {
                        const interest = [
                            user.interest.slice(0, 1)[0].toUpperCase(),
                            user.interest.slice(1)
                        ].join("");
                        return (
                            <tr key={`${key}-${user.email}`}>
                                <td>{key + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{interest}</td>
                                <td>{user.profile}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}