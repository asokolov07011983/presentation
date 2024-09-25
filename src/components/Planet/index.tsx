import { useState, useEffect, useRef } from 'react';
import earth from '../../assets/earth.png';

export const Planet = () => {
    const refEarth: any = useRef();
    const [rotation, setRotation] = useState(0);

    setInterval(() => {
        console.log('1111')
        setRotation((prevRotation) => prevRotation + 1);
    }, 10)

    useEffect(() => {
        // const handleKeyDown = (e) => {
        //     if (e.code === "ArrowRight") {
        //         setRotation((prevRotation) => prevRotation + 1);
        //     }
        //     if (e.code === "ArrowLeft") {
        //         setRotation((prevRotation) => prevRotation - 1);
        //     }
        // };



        // console.log('ref', refEarth);
        //
        // document.addEventListener("keydown", handleKeyDown);
        //
        // return () => {
        //     document.removeEventListener("keydown", handleKeyDown);
        // };
    }, []);




    return (
        <div style={{
                position: 'absolute',
                width: '100%',
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            {/*<img*/}
            {/*    src={earth}*/}
            {/*    alt="earth"*/}
            {/*    ref={refEarth}*/}
            {/*    style={{*/}
            {/*        width: `${window.innerWidth/2}px`,*/}
            {/*        height: `${window.innerWidth/2}px`,*/}
            {/*        position: 'absolute',*/}
            {/*        top: `${window.innerHeight - window.innerHeight/3}px`,*/}
            {/*        left: `-200px`,*/}
            {/*        transform: `rotate(${rotation}deg)`,*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    )
};