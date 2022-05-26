export default function UserTable({ users = [] }) {
    const userFields = users.length ? Object.keys(users[0]) : [];
    return <table>
        <thead>
            <tr>
                {
                    userFields.map(field => <th key={field}>{field}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => {
                    return <tr key={user.id}>
                        {
                            Object.keys(user).map((field) => {
                                return <td key={field}>{user[field]}</td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    </table>
}