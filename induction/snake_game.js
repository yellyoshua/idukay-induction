// @ts-check
function walkInTheWaze(maze = [[]], maze_results = [], {x = 0, y = 0} = {}, index = 0) {
    const isLastItemFromX = x === (maze.length - 1);
    const isLastItemFromY = y === (maze[x].length - 1);

    if (isLastItemFromX && isLastItemFromY) {
        return maze_results;
    }

    maze_results[index] ??= JSON.parse(JSON.stringify(maze));
    if (x + y === 0 && maze[x][y] === 1) {
        maze_results[index][x][y] = 2;
    }

    const turnDown = x + 1;
    if (maze[turnDown] && maze[turnDown][y] === 1) {
        maze_results[index][turnDown][y] = 2;
        const results = walkInTheWaze(maze, maze_results, {x: turnDown, y}, index);
        if (results[index][results[index].length - 1].includes(2)) {
            const mazeCopy = JSON.parse(JSON.stringify(maze));
            mazeCopy[turnDown][y] = 0;
            return walkInTheWaze(mazeCopy, maze_results, {}, index + 1);
        }

        maze_results[index][turnDown][y] = 1;
    }

    const turnRight = y + 1;
    if (maze[x] && maze[x][turnRight] === 1) {
        maze_results[index][x][turnRight] = 2;
        const results = walkInTheWaze(maze, maze_results, {x, y: turnRight}, index);
        if (results[index][results[index].length - 1].includes(2)) {
            const mazeCopy = JSON.parse(JSON.stringify(maze));
            mazeCopy[x][turnRight] = 0;
            return walkInTheWaze(mazeCopy, maze_results, {}, index + 1);
        }
        maze_results[index][x][turnRight] = 1;
    }

    const turnLeft = y - 1;
    if (maze_results[index][x] && maze_results[index][x][turnLeft] === 1) {
        maze_results[index][x][turnLeft] = 2;
        const results = walkInTheWaze(maze, maze_results, {x, y: turnLeft}, index);
        if (results[index][results[index].length - 1].includes(2)) {
            return results;
        }
        maze_results[index][x][turnLeft] = 1;
    }

    return maze_results;
}

function snakeGame(maze = [[]]) {
    const maze_result = walkInTheWaze(maze);

    // const maze_result_sort = maze_result.sort((a = [], b = []) => {
    //     return a.reduce((acc, current) => acc + current, 0) - b.reduce((acc, current) => acc + current, 0);
    // });

    console.log(maze_result)

    return maze_result.shift();
}

snakeGame([
    [1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [0, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1],
]);

module.exports = snakeGame;