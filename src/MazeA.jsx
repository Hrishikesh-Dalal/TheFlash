import React, {useState, useEffect, createContext} from "react";
import MazeB from "./MazeB";
export const UserContext =  createContext();
function MazeA(){
    /**
     useContext() = React Hook that allows you to share values
    between multiple levels of components
    without passing props through each level

    PROVIDER COMPONENT
    1. import {createContext} from 'react';
    2. export const MyContext = createContext();
    3. <MyContext.Provider value={value}>
    <Child />
    </MyContext.Provider>

    CONSUMER COMPONENTS
    1. import React, { useContext } from 'react';
    import { MyContext } from './ComponentA';
    2. const value = useContext(MyContext);
     */
    const [user, setUser] = useState("Iris West")
    return(<>
        <div className="box-context">
            <h1 className="box-content">Barry Allen</h1>
            <h3>I will save {user}!</h3>
            <UserContext.Provider value={user}>
                <MazeB user = {user}></MazeB>
            </UserContext.Provider>
        </div>
    </>)
}
export default MazeA;