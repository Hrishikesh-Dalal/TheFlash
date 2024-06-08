import React, {useState} from 'react';
function Counter(){
    const [count, setCount] = useState(5);

    const increament = () => {
        setCount(count + 10);
    }
    const decreament = () => {
        setCount(count - 7);
    }
    const reset = () => {
        setCount(5);
    }
    /* We can say onclick => useState */
    return (
        <>
            <div className='counter-container'>
                <h2 style={{color: "yellow"}}>What will be the speed of the Flash?</h2>
                <p className='counter-display'>{count}</p>
                <button className='couter-button' onClick={() => decreament()}>Slow Down</button>
                <button className='couter-button' onClick={() => reset()}>Normal</button>
                <button className='couter-button' onClick={() => increament()}>Speed Up</button>
            </div>
        </>
    );
}
export default Counter;