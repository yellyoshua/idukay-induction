const STEPS = {
    START: 'START',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    DOWN: 'DOWN',
    END: 'END',
}

// @ts-check
function walkInTheWaze(maze = [[]], {x = 0, y = 0} = {}, steps = [[]], index = 0) {
    const checkIsLastItemFromX = (activeX) => activeX === (maze.length - 1);
    const checkIsLastItemFromY = (activeY) => activeY === (maze[x].length - 1);

    const max = Math.abs(maze.length * maze[0].length);

    if (checkIsLastItemFromX(x) && checkIsLastItemFromY(y)) {
        return walkInTheWaze(maze, {x: 0, y: 0}, steps, index + 1);
    }

    steps[index] ??= [];

    if (steps[index].length === max) {
        return steps;
    }

    const turnDown = x + 1;
    if (maze[turnDown] && maze[turnDown][y] === 1) {
        steps[index].push(STEPS.DOWN);
        maze[turnDown][y] = 0;
        if (checkIsLastItemFromX(turnDown) && checkIsLastItemFromY(y)) {
            steps[index].push(STEPS.END);
        }
        const result = walkInTheWaze(maze, {x: turnDown, y}, steps, index);
        if (result[index].includes(STEPS.END)) {
            return result;
        }

        steps[index].pop();
        return walkInTheWaze(maze, {x: x - 1, y}, steps, index);
    }

    const turnRight = y + 1;
    if (maze[x] && maze[x][turnRight] === 1) {
        steps[index].push(STEPS.RIGHT);

        if (checkIsLastItemFromX(x) && checkIsLastItemFromY(turnRight)) {
            steps[index].push(STEPS.END);
        }

        return walkInTheWaze(maze, {x, y: turnRight}, steps, index);
    }

    const turnLeft = y - 1;
    if (maze[x] && maze[x][turnLeft] === 1) {
        steps[index].push(STEPS.LEFT);
        return walkInTheWaze(maze, {x, y: turnLeft}, steps, index);
    }

    return steps;
}

function snakeGame(maze = [[]]) {
    const maze_result = walkInTheWaze(maze);

    const result = maze_result.filter((step) => {
        return step.includes(STEPS.END);
    });

    const result_sort = result.sort((a, b) => {
        return a.length - b.length;
    });

    return result_sort.shift();
}

module.exports = snakeGame;