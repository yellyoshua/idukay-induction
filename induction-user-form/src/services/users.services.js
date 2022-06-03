const API_URL = 'http://localhost:5000';

export async function getUsers() {
    return fetch(API_URL + "/api/users")
        .then(res => res.json())
}

export async function createUser(data) {
    return fetch(API_URL + "/api/users", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json());
}

export async function updateUser(userId, data) {
    return fetch(API_URL + "/api/user/" + userId, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(res => res.data);
}