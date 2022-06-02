import { useContext } from "react";
import { WazeContext, STEPS_DIRECTIONS } from "../../providers/WazeProvider";
import ArrowSmRight from "../../icons/ArrowSmRight";
import ArrowSmDown from "../../icons/ArrowSmDown";
import ArrowSmLeft from "../../icons/ArrowSmLeft";
import SparklesIcon from "../../icons/SparklesIcon";

const iconStyles = {
    width: 20,
    height: 20,
    color: "black",
}

const steps_icons = {
    [STEPS_DIRECTIONS.RIGHT]: <ArrowSmRight {...iconStyles} />,
    [STEPS_DIRECTIONS.LEFT]: <ArrowSmLeft {...iconStyles} />,
    [STEPS_DIRECTIONS.DOWN]: <ArrowSmDown {...iconStyles} />,
    [STEPS_DIRECTIONS.END]: <SparklesIcon {...iconStyles} className="text-amber-600" />,
}

export default function StepsResume() {
    const { steps } = useContext(WazeContext);

    return (
        <div className="flex justify-center items-center">
            <p className="text-sm font-bold">Steps: </p>
            {
                steps.map(step => steps_icons[step])
            }
        </div>
    )
}