import React, {useState, useEffect, useRef} from "react";

function SaveIt(){
    const refer1 = useRef(null);
    const refer2 = useRef(null);
    const refer3 = useRef(null);

    function handleClick1(){
        refer1.current.focus();
        refer1.current.style.backgroundColor = "green";
        refer2.current.style.backgroundColor = "white";
        refer3.current.style.backgroundColor = "white";

    }
    function handleClick2(){
        refer2.current.focus();
        refer2.current.style.backgroundColor = "green";
        refer1.current.style.backgroundColor = "white";
        refer3.current.style.backgroundColor = "white";
    }
    function handleClick3(){
        refer3.current.focus();
        refer3.current.style.backgroundColor = "green";
        refer1.current.style.backgroundColor = "white";
        refer2.current.style.backgroundColor = "white";
    }
    return(<>
        <h2 className="save-title">Whom will you save?</h2>
        <div className="save-container">
        <button onClick={handleClick1} ref={refer1} className="save-button">
            <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Cisco-Ramon.The-Flash.webp" alt="Cisco pic" className="save-pic"/>
            Save Cisco!</button> 
        <button onClick={handleClick2} ref={refer2} className="save-button">
            <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/07/The-Flash-Caitlin-Snow.jpg" alt="Caitlyn pic" className="save-pic"/>
            Save Caitlyn!</button>
        <button onClick={handleClick3} ref={refer3} className="save-button">
            <img src="https://cdn.mos.cms.futurecdn.net/iagk646azUShKvPtGgdcDH.jpg" alt="HW image" className="save-pic" />
            Save Harrison Wells!</button>
            </div>
        
    </>)
}
export default SaveIt