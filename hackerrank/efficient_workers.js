const fs = require("fs");
/**
 * should return the minimum cost. Example:
 * nums = [4, 2, 8, 1, 9];
 * (2 - 1) + (8 - 9) = 2
*/

function getUniquePairs(pairs = []) {
    const sorted_pairs = pairs.sort((a, b) => {
        return a.difference - b.difference;
    });

    let unique_pairs = [];
    sorted_pairs.forEach((pair) => {
        const already_used = unique_pairs.find((unique_pair) => {
            const pairs_already_used = [
                unique_pair.first_peer,
                unique_pair.second_peer,
            ];
            return pairs_already_used.includes(pair.first_peer) 
                || pairs_already_used.includes(pair.second_peer);
        });
        
        if (!already_used) {
            unique_pairs.push(pair);
        }
        
    });

    unique_pairs = unique_pairs.sort((a, b) => a.difference - b.difference);

    return unique_pairs;
}

function resultOfUniquePairs(pairs = []) {
    let result = 0;
    pairs.forEach((pair) => {
        result += pair.difference;
    });
    return result;
}

function combinationsOfPairs(efficiency = [], ignore_index = 0) {
    let pairs = [];
    efficiency.forEach((first_peer_val, first_peer) => {
        efficiency.forEach((second_peer_val, second_peer) => {
            const active_indexes = [first_peer, second_peer];
            if (active_indexes.includes(ignore_index)) {
                return;
            }
            if (first_peer === second_peer)
                return;
            
            const difference = Math.abs(
                first_peer_val
                -
                second_peer_val
            );

            const new_pair = {
                first_peer,
                second_peer,
                values: [first_peer_val, second_peer_val],
                difference
            }
            pairs.push(new_pair);
        });
    });

    return pairs;
}

function minResultOfPairs(efficiency = [4, 2, 8, 1, 9]) {
    const full_pairs_combinations = [];
    full_pairs_combinations.push(
        combinationsOfPairs(
            efficiency.sort(),
            2
        )
    );

    efficiency.forEach((_, current_index) => {
    });
    
    const full_unique_pairs = full_pairs_combinations.map((pairs) => {
        return getUniquePairs(pairs);
    });
    // fs.writeFileSync("full_unique_pairs.json", JSON.stringify(full_unique_pairs, null, 2));

    const full_results = full_unique_pairs.map((unique_pairs) => {
        return resultOfUniquePairs(unique_pairs);
    }).sort((a, b) => a - b);

    console.log(full_results)

    return full_results.shift();
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