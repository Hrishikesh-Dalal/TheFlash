import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "./MazeA";
function MazeD(){

    const user = useContext(UserContext);
    return(<>
        <div className="box-context">
            <h1 className="box-content">Time Remanent Barry</h1>
            <h3>{user} will die soon...</h3>
        </div>
    </>)
}
export default MazeD;