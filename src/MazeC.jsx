import React, {useState, useEffect, useContext} from "react";
import MazeD from "./MazeD";
import { UserContext } from "./MazeA";
function MazeC(){
    const user = useContext(UserContext)
    return(<>
        <div className="box-context">
            <h1 className="box-content">Hunter Zolomon</h1>
            <h3>{user} will be my prisoner...</h3>
            <MazeD/>
        </div>
    </>)
}
export default MazeC;