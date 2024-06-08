import React, {useState} from 'react'

function Form(){
    const [name,setName] = useState("");
    const [age, setAge] = useState(0);
    const [power, setPower] = useState("None");
    const [time, setTime] = useState();

    function updateName(event){
        setName(event.target.value);
    }

    function updateAge(event){
        setAge(event.target.value);
    }

    function updatePower(event){
        setPower(event.target.value);
    }

    function updateTime(event){
        setTime(event.target.value);
    }
    return (
        <>
            <h2>The Team Flash Form!</h2>
            <input value= {name} type="text" onChange={updateName} placeholder='Meta Human'/>
            <p>Name : {name}</p>

            <input type="range" name="Age" id="" value={age} onChange={updateAge} />
            <p>Age: {age}</p>

            <select name="" id="" value={power} onChange={updatePower}>
                <option value="None">None</option>
                <option value="Speed Up">Speed Up</option>
                <option value="Freeze People">Freeze People</option>
                <option value="See an alternate version">See an alternate version</option>
            </select>
            <br />
            <br />
            <label >
                <input type="radio" value="Past" 
                    checked={time === "Past"}
                    onChange={updateTime}
                /> Past
            </label>
            <label >
                <input type="radio" value="Current Time" 
                    checked={time === "Current Time"}
                    onChange={updateTime}
                /> Current Time
            </label>
            <label >
                <input type="radio" value="Future" 
                    checked={time === "Future"}
                    onChange={updateTime}
                /> Future
            </label>
            <hr />
        </>      
    );

}
export default Form