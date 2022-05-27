const specialChars = '!@#$%^&_+|[].,/=-';
const chars = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

export function randomId() {
    const id = [];
    const length = 12;

    for (let i = 0; i < length - 1; i++) {
        if (i % 2 === 0) {
            id.push(chars[Math.floor(Math.random() * chars.length)]);
        } else {
            id.push(numbers[Math.floor(Math.random() * numbers.length)]);
        }
    }
    id.push(specialChars[Math.floor(Math.random() * specialChars.length)]);

    return id.join('');
}