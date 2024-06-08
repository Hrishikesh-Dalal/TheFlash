import React, {useEffect, useState} from "react";

function WidthHeight(){
    /*

    Runs after every re-render
    Runs only on mount


    useEffect() = React Hook that tells React to DO THIS CODE WHEN (pick one):
    This component re-renders
    This component mounts
    The state of a value

    useEffect(function, [dependencies])

    1. useEffect(() => {})
    2. useEffect(() => {}, [])
    3. useEffect(() => {}, [value]) // Runs on mount + when value changes

    USES
    #1 Event Listeners
    #2 DOM manipulation
    #3 Subscriptions (real-time updates)
    #4 Fetching Data from an API
    #5 Clean up when a component unmounts
    */

    // window.addEventListener(event, function)
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED")

        return(() => {
            window,removeEventListener("resize", handleResize);
        })
    }, [])

    useEffect(() => {
        document.title = "In a Flash"
        console.log("TITLE rendered");
    })    
  
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return(<>
        <p>X - Co-ord of Flash: <b>{width}</b></p>
        <p>Y-Co-ord of Flash <b>{height}</b></p>
        <hr />
    </>)
}

export default WidthHeight