import { useContext, useMemo } from "react";
import { WazeContext, STEPS_DIRECTIONS } from "../../providers/WazeProvider";
import PlaneCell from "../PlaneCell";

export default function PlaneGrid() {
    const {
        waze,
        steps = [],
        getSnakePosition,
    } = useContext(WazeContext);

    const snakePosition = useMemo(() => {
        return getSnakePosition();
    }, [steps, getSnakePosition]);

    const wazeWalked = useMemo(() => {
        const wazeCopy = JSON.parse(JSON.stringify(waze));
        let prevStep = { x: 0, y: 0 };
        wazeCopy[prevStep.y][prevStep.x] = 2;
        steps.forEach(step => {
            switch (step) {
                case STEPS_DIRECTIONS.DOWN:
                    prevStep.y += 1;
                    wazeCopy[prevStep.y][prevStep.x] = 2;
                    break;
                case STEPS_DIRECTIONS.LEFT:
                    prevStep.x -= 1;
                    wazeCopy[prevStep.y][prevStep.x] = 2;
                    break;
                case STEPS_DIRECTIONS.RIGHT:
                    prevStep.x += 1;
                    wazeCopy[prevStep.y][prevStep.x] = 2;
                    break;
                default:
                    break;
            }
        });
        return wazeCopy;
    }, [steps]);

    return (
        <div>
            {
                wazeWalked.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex items-center justify-center">
                        {
                            row.map((cell, cellIndex) => (
                                <PlaneCell
                                    key={cellIndex}
                                    cell={cell}
                                    walked={cell === 2}
                                    snake={snakePosition.x === cellIndex && snakePosition.y === rowIndex}
                                />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );

}