import React, {useState, useEffect, useRef} from "react";

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false); // to check if started or not
    const [elapsedTime, setElapsedTime] = useState(0);
    const [message, setMessage] = useState("");
    const intervalId = useRef(null); // Used just for clearing
    const startTimRef = useRef(0);
    const requiredTime = "00:00:05.150"; // format as hh:mm:ss:ms

    useEffect(() => {
        if(isRunning){
            // setInterval(function, interval)
            intervalId.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimRef.current);
            }, 100);
        }

        return () => {
            clearInterval(intervalId.current);
        }
    }, [isRunning]);

    function startTime(){
        setIsRunning(true);
        setMessage("");
        startTimRef.current = Date.now() - elapsedTime; // gives time in millis
    }

    function endTime(){
        setIsRunning(false);
        if (formatTime() === requiredTime) {
            setMessage("Flash saved the world!");
        } else {
            setMessage("Zoom Took over the world!");
        }
    }

    function resetTime(){
        setElapsedTime(0);
        setIsRunning(false);
        setMessage("");
    }

    function formatTime() {
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        const min = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        const milli = elapsedTime % 1000;

        return `${String(hours).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(milli).padStart(3, "0")}`;
    }

    return(
        <>
            <div className="stopwatch-box">
                <h2 style={{color:"yellow"}}>Flash Saves the world only if you stop the time at {requiredTime}</h2>
                <h3>{formatTime()}</h3>
                <div className="stopwatch-button-list">
                    <button onClick={startTime} className="stopwatch-start">Start</button>
                    <button onClick={endTime} className="stopwatch-stop">Stop</button>
                    <button onClick={resetTime} className="stopwatch-reset">Reset</button>
                </div>
                {message && <p className="message">{message}</p>}
            </div>
            <hr />
        </>
    );
}

export default Stopwatch;
