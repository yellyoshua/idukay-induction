function combinationsOfPairs(efficiency = [], ignore_index = 0) {
    const pairs = [];

    let efficiency_clone = [...efficiency];

    efficiency_clone[ignore_index] = null;
    efficiency_clone = efficiency_clone.filter((num) => num !== null);

    for (let i = 0; i < efficiency_clone.length; i += 2) {
        const isTheLastItem = i + 1 === efficiency_clone.length;
        if (isTheLastItem) break;
        const current = efficiency_clone[i];
        const next = efficiency_clone[i + 1];

        const difference = Math.abs(current - next);
        pairs.push({ difference });
    }

    return pairs;
}

function filterEqualPairs(arr = []) {
    const unique = {};
    arr.forEach((num) => {
        if (!unique[num])
            unique[num] = 0;
        unique[num]++;
    });

    const filterOdds = (num) => unique[num] % 2 !== 0;
    const toNumber = (num) => Number(num);

    return Object.keys(unique)
        .filter(filterOdds)
        .map(toNumber);
}

function minResultOfPairs(efficiency = [4, 2, 8, 1, 9]) {
    const NO_EFFICIENCY = 0;
    efficiency = filterEqualPairs(efficiency);
    efficiency = efficiency.sort((a, b) => a - b);
    if (!efficiency.length) return NO_EFFICIENCY;
    const pairs_combinations = [];

    efficiency.forEach((_, current_index) => {
        pairs_combinations.push(
            combinationsOfPairs(
                efficiency,
                current_index,
            )
        );
    });

    let pairs_efficiencies = pairs_combinations.map(pairs => {
        const efficiency = pairs.reduce((memo, pair) => {
            return memo + pair.difference;
        }, 0);

        return efficiency;
    });

    pairs_efficiencies = pairs_efficiencies.sort((a, b) => a - b);

    return pairs_efficiencies.shift();
}

// console.log(minResultOfPairs([
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
// ])); // 0

// console.log(minResultOfPairs([
//     36, 73, 66, 25, 70, 28, 96, 62, 88, 51, 30, 32,
//     45, 99, 78, 48, 93, 16, 5, 27, 75, 27, 29, 83,
//     19, 94, 90, 11, 89, 83, 91, 15, 98, 38, 36, 83,
//     83, 81, 22, 44, 71, 71, 90, 73, 30, 52, 22, 77,
//     80, 67, 98, 6, 78, 10, 69, 70, 89
// ])); // 34
// console.log(minResultOfPairs([4, 1, 2, 16, 8])); // 5
// console.log(minResultOfPairs([
//     2, 13, 12, 9,
//     6, 3, 2
// ])); // 4

// console.log(minResultOfPairs([
//     4, 2, 8, 1, 9
// ])); // 2
// console.log(minResultOfPairs([
//     90, 3, 90, 65, 48,
//     73, 10, 43, 56, 1,
//     64
// ])); // 23

module.exports = function findMinCost(efficiency = []) {
    // Write your code here
    // print array with their index and value
    return minResultOfPairs(efficiency);
}