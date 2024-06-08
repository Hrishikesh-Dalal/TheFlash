import React, {useState} from 'react'

function ArrayList(){
    const [arr, setArr] = useState(["Iris", "Caitlyn", "Jessie"]);
    const [women, setName] = useState();
    function updateName(e){
        setName(e.target.value);
    }
    function addName(){
        if(women.trim()){
            setArr(a => [...a, women]);
            setName("");
        }
        /* Alternate */
        // const newFood = document.getElementById("foodInput").value;
        // document. getElementById("foodInput").value = "";

        // setFoods(f => [ ... f, newFood]);
    }
    function deleteArr(index){
        const updatedArr = arr.filter((_, i) => i !== index);
        setArr(updatedArr);
    }
    return (<>
        <h2>Women of the Flash</h2>
        <ul>
            {arr.map((ar, index) => <li key={index} onClick={()=>deleteArr(index)}>
                                {ar}
                            </li>)}
        </ul>
        <input type="text" id='foodInput' value={women} placeholder='Someone...' onChange={updateName}/>
        <button onClick={addName}>Add</button>
        <hr />
    </>);
}
export default ArrayList;