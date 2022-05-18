const fs = require("fs");
/**
 * should return the minimum cost. Example:
 * nums = [4, 2, 8, 1, 9];
 * (2 - 1) + (8 - 9) = 2
*/

function getUniquePairs(pairs = []) {
    let unique_pairs = [];
    pairs.forEach((pair) => {
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

    unique_pairs = unique_pairs.sort((a, b) => {
        return a.difference - b.difference;
    });

    return unique_pairs;
}

function resultOfUniquePairs(pairs = [], efficiencies_by_value = {}) {
    const unique_pair = {
        result: 0,
        couples: [],
        values_excluded: {}
    };
    const pairs_already_used = {};
    pairs.forEach((pair) => {
        unique_pair.couples.push(...pair.values);
        unique_pair.result += pair.difference;
    });
    pairs.map((pair) => pair.values).flat(3).forEach((pair) => {
        if (!pairs_already_used[pair]) {
            pairs_already_used[pair] = 0;
        }
        pairs_already_used[pair]++;
    });

    Object.keys(efficiencies_by_value).forEach((pair) => {
        if (!pairs_already_used[pair]) {
            if (!unique_pair.values_excluded[pair]) {
                unique_pair.values_excluded[pair] = 0;
            }
            unique_pair.values_excluded[pair]++;
        } else if (pairs_already_used[pair] < efficiencies_by_value[pair]) {
            if (!unique_pair.values_excluded[pair]) {
                unique_pair.values_excluded[pair] = 0;
            }
            unique_pair.values_excluded[pair] = Math.abs(
                efficiencies_by_value[pair] - pairs_already_used[pair]
            );
        }
    });
    return unique_pair;
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

            pairs.push({
                first_peer,
                second_peer,
                values: [first_peer_val, second_peer_val],
                difference
            });
        });
    });

    return pairs;
}

const results = [];

function filterEqualPairs(arr = []) {
    const unique = {};
    arr.forEach((num) => {
    if (!unique[num])
            unique[num]= 0 ;
    unique[num]++;
    });
    
    return Object.keys(unique).filter((u) => {
    return unique[u] % 2 !== 0;
    }).map(Number);
}

function minResultOfPairs(efficiency = [4, 2, 8, 1, 9]) {
    efficiency = filterEqualPairs(efficiency);
    efficiency = efficiency.sort((a, b) => a - b);
    let evaluations = [];
    let ignore_index = null;
    for (let i = 0; i < efficiency.length; i++) {
        if (ignore_index !== null) {
            // the case that index exists
            const current = Math.abs(efficiency[ignore_index] - efficiency[i]);
            const next = Math.abs(efficiency[i] - efficiency[i + 1]);
            if (current < next) {
                evaluations.push({
                    first_peer: ignore_index,
                    second_peer: i,
                    difference: current,
                    values: [efficiency[ignore_index], efficiency[i]]
                });
                ignore_index = null;
            }
        } else {
            const current = Math.abs(efficiency[i] - efficiency[i + 1]);
            const next = Math.abs(efficiency[i + 1] - efficiency[i + 2]);
            if (evaluations.length) {
                const last_evaluation = evaluations.pop();
                if (last_evaluation.difference > current) {
                    evaluations.push({
                        first_peer: i,
                        second_peer: i + 1,
                        difference: current,
                        values: [efficiency[i], efficiency[i + 1]]
                    });
                } else {
                    evaluations.push(last_evaluation);
                }
                continue;
            } else {
                if (current < next) {
                    evaluations.push({
                        first_peer: i,
                        second_peer: i + 1,
                        difference: current,
                        values: [efficiency[i], efficiency[i + 1]]
                    });
                    ignore_index = null;
                } else {
                    evaluations.push({
                        first_peer: i + 1,
                        second_peer: i + 2,
                        difference: next,
                        values: [efficiency[i + 1], efficiency[i + 2]]
                    });
                    ignore_index = i;
                }
            }
        }
        
    }
    evaluations = evaluations.filter((evaluation) => {
        return typeof evaluation.difference === "number";
    });
    let uniques = [];
    evaluations.forEach((evaluation) => {
        const already_used = uniques.find((unique) => {
            const pairs_already_used = [
                unique.first_peer,
                unique.second_peer,
            ];
            return pairs_already_used.includes(evaluation.first_peer) 
                || pairs_already_used.includes(evaluation.second_peer);
        });

        if (!already_used) {
            uniques.push(evaluation);
        }
    });
    console.log(uniques);
    const total = uniques.reduce((acc, curr) => {
        return acc + curr.difference;
    }, 0);
    return 0;
}

console.log(minResultOfPairs([
    36, 73, 66, 25, 70, 28, 96, 62, 88, 51, 30, 32,
    45, 99, 78, 48, 93, 16,  5, 27, 75, 27, 29, 83,
    19, 94, 90, 11, 89, 83, 91, 15, 98, 38, 36, 83,
    83, 81, 22, 44, 71, 71, 90, 73, 30, 52, 22, 77,
    80, 67, 98,  6, 78, 10, 69, 70, 89
])); // 34
console.log(minResultOfPairs([ 4, 1, 2, 16, 8 ])); // 5
console.log(minResultOfPairs([
    2, 13, 12, 9,
    6,  3,  2
])); // 4

console.log(minResultOfPairs([
    4, 2, 8, 1, 9
])); // 2
console.log(minResultOfPairs([
    90,  3, 90, 65, 48,
    73, 10, 43, 56,  1,
    64
])); // 23

console.log(results);

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