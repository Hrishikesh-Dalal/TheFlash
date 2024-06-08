import React, {useState, useEffect, useContext} from "react";
import MazeC from "./MazeC";
import { UserContext } from "./MazeA";
function MazeB(){
    const user = useContext(UserContext);
    return(<>
        <div className="box-context">
            <h1 className="box-content">Eobard Thawne</h1>
            <h3>I don't care about {user}</h3>
            <MazeC/>
        </div>
    </>)
}
export default MazeB;