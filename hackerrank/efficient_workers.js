module.exports = function findMinCost(efficiency = []) {
    // Write your code here
    // print array with their index and value


    
    console.log(efficiency);
    console.log(efficiency.length);

    const odds = efficiency.filter((e) => e % 2 !== 0);
    const evens = efficiency.filter((worker) => worker % 2 === 0);
    const sumOfEvens = evens.reduce((acc, curr) => acc + curr, 0);
    const sumOfOdds = odds.reduce((acc, curr) => acc + curr, 0);
    const diff = sumOfEvens - sumOfOdds;
    console.log(diff);

    // Get a random value from the efficiency array
    const randomEfficiency = efficiency[Math.floor(Math.random() * efficiency.length)];
    console.log(randomEfficiency);

    const isOdd = (num) => num % 2 !== 0;
    efficiency.forEach((worker) => {
        if (isOdd(worker)) {

        }
    })
    return 5;
}