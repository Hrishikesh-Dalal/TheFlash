import React, {useState} from 'react'

function Trivia(){
    const [season, setSeason] = useState({
                                            num : 1,
                                            villian: "Reverse Flash",
                                            support: "Caitlyn Snow",
                                            });
    /*use Arrow functons for safe updattion in case of objects */
    function updateNum(event){
        setSeason(s => ({...s, num : event.target.value})); //')' is used to contain
    }
    function updateVillian(event){
        setSeason(s => ({...s, villian : event.target.value})); //')' is used to contain
    }
    function updateSupport(event){
        setSeason(s => ({...s, support : event.target.value})); //')' is used to contain
    }

    return (<>
        <h2>Your favourite Season : {season.num} with villian: {season.villian} and support is {season.support} </h2>
        <input type="range" value={season.num} max={9} onChange={updateNum}/><br />
        <input type="text" value={season.villian} onChange={updateVillian}/> <br />
        <input type="text" value={season.support} onChange={updateSupport}/> <br />
        <hr />
    </>);
}

export default Trivia