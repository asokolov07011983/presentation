import { FC, MutableRefObject, useEffect, useRef, useState} from "react";
import earth from '../../assets/earth.png';
import dogRun from '../../assets/dog_run.png';
import dogRunReverse from '../../assets/dog_run_reverse.png';
import { getCanvas } from "./helpers";
export const TestCanvas: FC = () => {
    const canvasRef  = useRef<HTMLCanvasElement>() as MutableRefObject<HTMLCanvasElement>;

    const [windowSize, setWindowSize] = useState<{ width: number, height: number }>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        getCanvas(canvasRef, windowSize);
    }, []);

    return (
        <>
            <canvas
                id="canvas"
                ref={canvasRef}
                width={windowSize.width}
                height={windowSize.height}
            />
            <img src={earth} id='earth' alt="" style={{ display: 'none' }} />
            <img src={dogRun} id='dogRun' alt="dogRun" style={{ display: 'none' }} />
            <img src={dogRunReverse} id='dogRunReverse' alt="dogRunReverse" style={{ display: 'none' }} />
        </>
    )
};