#!/bin/node

const MAX_LOTTERY_LEN = 10;
function lottery(size = 10) {
    const lottery_numbers = new Array(MAX_LOTTERY_LEN).fill("x");

    function printLotteryInConsole() {
        console.clear();
        console.log(lottery_numbers.join(" "));
    }

    function generateRandomNumber(max = size) {
        const random_number = Math.floor(Math.random() * max);
        if (lottery_numbers.includes(random_number)) {
            return generateRandomNumber(max);
        }
        return random_number;
    }

    let i = MAX_LOTTERY_LEN - 1;
    const intervale = setInterval(() => {
        lottery_numbers[i--] = generateRandomNumber();
        printLotteryInConsole();
        if (!lottery_numbers.includes("x")) {
            clearInterval(intervale);
        }
    }, 500);
}

console.log("Enter the size of the lottery: ");
process.stdin.setEncoding("utf8");
process.stdin.on("readable", () => {
    const input = process.stdin.read();
    if (input && Number(input) >= 10) {
        lottery(Number(input));
    }
});