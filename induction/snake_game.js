function walkInTheWaze(maze = [[]], maze_result = [], x = 0, y = 0) {
    const isLastItemFromX = x === (maze.length - 1);
    const isLastItemFromY = y === (maze[x].length - 1);

    if (isLastItemFromX && isLastItemFromY) {
        return maze_result;
    }

    if (x + y === 0 && maze[x][y] === 1) {
        maze_result[x][y] = 2;
    }

    if (maze[x + 1] && maze[x + 1][y] === 1) {
        maze_result[x + 1][y] = 2;
        const maze_tpm = walkInTheWaze(maze, maze_result, x + 1, y);
        if (maze_tpm[maze_tpm.length - 1].includes(2)) {
            return maze_tpm;
        }

        maze_result[x + 1][y] = 1;
    }

    if (maze[x] && maze[x][y + 1] === 1) {
        maze_result[x][y + 1] = 2;
        return walkInTheWaze(maze, maze_result, x, y + 1);
    }

    if (maze_result[x] && maze_result[x][y - 1] === 1) {
        maze_result[x][y - 1] = 2;
        return walkInTheWaze(maze, maze_result, x, y - 1);
    }

    return maze_result;
}

module.exports = function snakeGame(maze = [[]]) {
    const maze_result = walkInTheWaze(
        maze,
        JSON.parse(JSON.stringify(maze)),
    );

    console.log(maze_result);

    return maze_result;
}