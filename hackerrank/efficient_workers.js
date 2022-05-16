const fs = require("fs");
/**
 * should return the minimum cost. Example:
 * nums = [4, 2, 8, 1, 9];
 * (2 - 1) + (8 - 9) = 2
*/

function minResultOfPairs(efficiency = [4, 2, 8, 1, 9]) {
    const pairs_by_index = {};

    const n_pairs = (efficiency.length - 1) / 2;
    efficiency = efficiency.sort((a, b) => a - b);
    efficiency.forEach((first_peer_val, first_peer_index) => {
        efficiency.forEach((second_peer_val, second_peer_index) => {
            if (first_peer_index === second_peer_index)
                return;
            const pair_value = Math.abs(
                first_peer_val
                -
                second_peer_val
            );
            if (pairs_by_index[second_peer_index] &&
                    (pairs_by_index[second_peer_index][first_peer_index]
                        !== undefined)
            ) {
                return;
            }
            if (!pairs_by_index[first_peer_index]) {
                pairs_by_index[first_peer_index] = {[second_peer_index]: pair_value};
            } else {
                pairs_by_index[first_peer_index][second_peer_index] = pair_value;
            }
        });
    });

    return 2;

    fs.writeFileSync("pairs.json", JSON.stringify(pairs_by_index, null, 2));
    fs.writeFileSync("full-pairs.json", JSON.stringify(full_result, null, 2));
    fs.writeFileSync("unique_pairs.json", JSON.stringify(full_result.reduce((acc, [first_peer, second_peer]) => {
        if (acc.includes(first_peer) || acc.includes(second_peer))
            return acc;
        return acc.concat([first_peer, second_peer]);
    }, []), null, 2));
    console.log({
        full_result,
    })

    const best_pairs = Object.keys(pairs_by_index).map(first_peer => {
        const second_peers = pairs_by_index[first_peer];
        const [second_peer, value] = Object.entries(second_peers)
            .sort((a, b) => a[1] - b[1])[0];
        
        return [first_peer, second_peer, value];
    }).sort((a, b) => a[2] - b[2]);

    const unique_pairs = best_pairs.reduce((acc, [first_peer, second_peer]) => {
        if (acc.includes(first_peer) || acc.includes(second_peer))
            return acc;
        return acc.concat([first_peer, second_peer]);
    }, []);

    // iterate n_pairs times
    console.log({unique_pairs});
    let result = 0;
    for (let i = 0; i < n_pairs; i++) {
        const first_peer = unique_pairs.shift();
        const second_peer = unique_pairs.shift();
        result += Math.abs(efficiency[first_peer] - efficiency[second_peer]);
    }

    console.log({pairs_by_index, best_pairs, result, n_pairs});

    return result
}

// console.log(minResultOfPairs([ 4, 1, 2, 16, 8 ])); // 5
// console.log(minResultOfPairs([
//     2, 13, 12, 9,
//     6,  3,  2
// ])); // 2

// console.log(minResultOfPairs([
//     4, 2, 8, 1, 9
// ])); // 2
console.log(minResultOfPairs([
    90,  3, 90, 65, 48,
    73, 10, 43, 56,  1,
    64
])); // 23

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