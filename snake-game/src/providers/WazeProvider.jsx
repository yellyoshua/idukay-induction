import { createContext, useState } from "react";

export const STEPS_DIRECTIONS = {
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    END: "END",
};

export const WazeContext = createContext({});

export default function WazeProvider({ children, initialWaze }) {
    const [waze] = useState(initialWaze);
    const [steps, setSteps] = useState([]);

    const getSnakePosition = () => {
        const snakePostion = { x: 0, y: 0 };
        steps.forEach(step => {
            switch (step) {
                case STEPS_DIRECTIONS.DOWN:
                    snakePostion.y += 1;
                    break;
                case STEPS_DIRECTIONS.LEFT:
                    snakePostion.x -= 1;
                    break;
                case STEPS_DIRECTIONS.RIGHT:
                    snakePostion.x += 1;
                    break;
                default:
                    break;
            }
        });
        return snakePostion;
    }

    const walkInTheWaze = () => {
        const xlen = waze.length;
        const ylen = waze[0].length;
        const { x, y } = getSnakePosition();

        const isLastStep = (xStep, yStep) => {
            return xStep === xlen - 1 && yStep === ylen - 1;
        };
        
        const turnRight = x + 1;
        if (waze[y] && waze[y][turnRight] === 1) {
            setSteps([...steps, STEPS_DIRECTIONS.RIGHT]);
            if (isLastStep(turnRight, y) && !steps.includes(STEPS_DIRECTIONS.END))
                setSteps(prev => ([...prev, STEPS_DIRECTIONS.END]));
            return;
        }

        const turnDown = y + 1;
        if (waze[turnDown] && waze[turnDown][x] === 1) {
            setSteps([...steps, STEPS_DIRECTIONS.DOWN]);
            if (isLastStep(x, turnDown) && !steps.includes(STEPS_DIRECTIONS.END))
                setSteps(prev => ([...prev, STEPS_DIRECTIONS.END]));
            return;
        }

        const turnLeft = x - 1;
        if (waze[y] && waze[y][turnLeft] === 1) {
            setSteps([...steps, STEPS_DIRECTIONS.LEFT]);
            return;
        }
    }

    const revWalkInTheWaze = () => {
        const stepsCopy = steps.slice();
        if (stepsCopy.pop() === STEPS_DIRECTIONS.END)
            stepsCopy.pop();
        setSteps(stepsCopy);
    }

    
    return (
        <WazeContext.Provider value={{
            waze,
            steps,
            walkInTheWaze,
            revWalkInTheWaze,
            getSnakePosition,
        }}>
        {children}
        </WazeContext.Provider>
    );
}