import { useContext, useEffect, useState } from "react";
import ArrowNarrowLeftIcon from "../../icons/ArrowNarrowLeftIcon";
import ArrowNarrowRightIcon from "../../icons/ArrowNarrowRightIcon";
import { WazeContext, STEPS_DIRECTIONS } from "../../providers/WazeProvider";

export default function Controls() {
    const {
        steps,
        walkInTheWaze,
        revWalkInTheWaze,
    } = useContext(WazeContext);
    const [isAutoMode, setAutoMode] = useState(false);


    useEffect(() => {
        let interval;
        if (isAutoMode) {
            interval = setInterval(() => {
                walkInTheWaze();
                if (steps.includes(STEPS_DIRECTIONS.END)) {
                    clearInterval(interval);
                    setAutoMode(false);
                }
            }, 500);
            return () => clearInterval(interval);
        }

        return () => {
            interval && clearInterval(interval);
        }
    }, [isAutoMode, steps, walkInTheWaze]);

    return (
        <div className="flex justify-center items-center my-3 mx-1">
            <button
                onClick={revWalkInTheWaze}
                className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                <ArrowNarrowLeftIcon width={25} height={25} />
            </button>
            <button
                onClick={walkInTheWaze}
                className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                <ArrowNarrowRightIcon width={25} height={25} />
            </button>

            <button
                onClick={() => setAutoMode(!isAutoMode)}
                className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                {isAutoMode ? "Stop" : "Auto"}
            </button>
        </div>
    )
}