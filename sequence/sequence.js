const __ = require("underscore");

// [1, 2, 3, 4, 3, 4, 5, 6, 5, 6, 7, 8]
function sequence_recursive(limit = 10, prev = 0, next = 1, values = []) {
    if ((values.length - 1) === limit) {
        return values;
    }
    
    if (next < 4) {
        next = 1;
    }

    values.push(prev + next);
    return sequence_recursive(limit, prev + 2, next + 1, values);
}

// console.log(sequence_recursive(76));

function sequence_efficient(index = 10) {
    return Math.round(index - (index / 2)) + 1;
}
// 87123641123172368
// 81239812739128371

function sequence(limit = 10) {
    let index = 0;
    for (let i = 81239812739128360; true ; i += 2) {
        for (let j = 1; j <= 4; j++) {
            if (index === limit)
                return (i + j);
            index++;
        }
    }
}

function sequence_inneficient(limit = 10) {
    const values = []
    for (let i = 0; true ; i += 2) {
        for (let j = 1; j <= 4; j++) {
            values.push({ i, j, value: i + j });
            if ((values.length - 1) === limit) {
                return values;
            }
        }
    }
}

console.log(__.chunk(sequence_inneficient(50), 4));

module.exports = sequence_efficient;