/**
 * should return the minimum cost. Example:
 * nums = [4, 2, 8, 1, 9];
 * (2 - 1) + (8 - 9) = 2
 */

const filterNonValues = (val) => {
    return val === null || val === undefined;
}
const delFromIndex = (arr = [], index = 0) => {
    const clone = arr;
    delete clone[index];
    return clone.filter(filterNonValues)
}
function minResultOfPairs(efficiency = [4, 2, 8, 1, 9]) {
    const pairs = {};
    for (let i = 0; i < efficiency.length; i++) {
        const first = efficiency[i];

        let j = (efficiency.length - 1);
        for (; j >= 0; j--) {
            const last = efficiency[j];
            const [firstLast, lastFirst] = [
                Math.abs(first - last),
                Math.abs(last - first)
            ];
            if (!firstLast || !lastFirst)
                continue;
            if (firstLast === lastFirst) {
                if (`${first}-${last}` in pairs) {
                    pairs[`${first}-${last}`] = firstLast;
                } else {
                    pairs[`${last}-${first}`] = lastFirst;
                }
            } else if (firstLast < lastFirst) {
                pairs[
                    `${first}-${last}`
                ] = firstLast;
            } else if (firstLast > lastFirst) {
                pairs[
                    `${last}-${first}`
                ] = firstLast;
            }
        }
    }

    let result = 0;
    const prevPairs = [];
    const n_pairs = Math.abs((efficiency.length - 1) / 2);
    const pairs_comb = Object.entries(pairs).sort((a, b) => a[1] - b[1]);
    
    for (let i = 0, j = 0; i < pairs_comb.length; i++) {
        const [combination, value] = pairs_comb[i];
        const [first, second] = combination.split("-");
        if (
            !prevPairs.includes(first.toString())
            && !prevPairs.includes(second.toString())
        ) {
            result += value;
            j++;
            prevPairs.push(first, second);
        }
        if (j === n_pairs) {
            break;
        }
    }
    console.log(pairs_comb);
    return result;
}

module.exports = function findMinCost(efficiency = []) {
    // Write your code here
    // print array with their index and value
    return minResultOfPairs(efficiency);
    const isEven = (num) => num % 2 === 0;
    const isOdd = (num) => num % 2 !== 0;

    const oddsFilter = (element) => !isEven(element);
    const evensFilter = (element) => isEven(element);

    const numOfPairs = (efficiency.length - 1) / 2;

    const pairs = {};

    for (let i = 0; i < efficiency.length; i++) {
        pairs[i] = [];
        for (let j = 0; j < efficiency.length; j++) {
            pairs[i]
        }
    }
    let firstOdd = 0;
    let secondOdd = 0;
    efficiency.shift();

    efficiency.forEach((element) => {
        if (isEven(element) && !firstOdd) {
            firstOdd = element;
        }
        if (isEven(element) && !secondOdd) {
            secondOdd = element;
        }
        if (!isEven(element) && firstOdd) {
            firstOdd -= element;
        }
        if (!isEven(element) && secondOdd) {
            secondOdd -= element;
        }
    });

    let result = 0;
    efficiency = efficiency.sort((a, b) => a - b);
    while (efficiency.length) {
        const first = efficiency.shift();
        const last = efficiency.pop();
        if (first && last) {
            result += Math.abs(last - first);
        }
    }
    return result;
}