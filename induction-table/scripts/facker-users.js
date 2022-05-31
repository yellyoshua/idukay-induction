const { faker } = require("@faker-js/faker");
const fs = require('fs');

function createRandomUser() {
    const user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        interest: faker.helpers.arrayElement(["sports", "music", "movies", "books", "games"]),
        profile: faker.lorem.paragraph(2),
    }

    user.searchable = `${user.name} ${user.email}`;

    return user;
}

function generateUsers(count) {
    const users = [];

    for (let i = 0; i < count; i++) {
        users.push(createRandomUser());
    }

    return users;
}

const data = generateUsers(100);

fs.writeFileSync('./src/data/users.json', JSON.stringify({ data }, null, 2));