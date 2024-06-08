import React, {useState} from "react";

function Todo(){
    const [tasks, setTasks] = useState(["Save Iris", "Defeat Zoom", "Hangout with Green Arrow"]);
    const [newTask, setNewTasks] = useState();
    function handleInputChange(event){
        setNewTasks(event.target.value);
    }

    function addItem(){
        if(newTask != ""){
            setTasks(t => [...t, newTask]);
            setNewTasks("");
        }
    }

    function removeItem(index){
        const updatedTasks = tasks.filter((task,i) => i !== index);
        setTasks(updatedTasks);
    }

    function upvoteItem(index){
        // A bit unique on how we have to do -> JUST SWAP
        if(index >0 ){
            const updatedTasks = [...tasks];
            [updatedTasks[index-1], updatedTasks[index]] = 
            [updatedTasks[index], updatedTasks[index-1]];
            setTasks(updatedTasks);
        }
  
    }

    function downvoteItem(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index+1], updatedTasks[index]] = 
            [updatedTasks[index], updatedTasks[index+1]];
            setTasks(updatedTasks);
        }
    }
    return(
        <>
            <h1>Flash Todo!</h1>
            <div className="todo-add-item">
                <input type="text" 
                       value={newTask} 
                       onChange={handleInputChange} 
                       placeholder="What's on your mind.."/>
                <button className="todo-add-button" onClick={addItem}>Add Me</button>
            </div>
            <div>
                <ol>
                    {tasks.map((task, index) => <li key={index} className="todo-bullets">
                                                                {task}
                                                                <button onClick={() => removeItem(index)} className="todo-delete">Delete</button>
                                                                <button onClick={() => upvoteItem(index)} className="todo-upvote">😆</button>
                                                                <button onClick={() => downvoteItem(index)}className="todo-downvote">😔</button>
                                                            </li>)}
                    
                </ol>
            </div>

                
        </>
    );
}
export default Todo ;