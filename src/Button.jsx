function Button(){
    const handleClick = (e) =>{
            e.target.textContent = 'Hello there!'
    }

    function imageClicked(e){
        e.target.style.display = "none"
    }
    return (
        <>
            <button onClick={(e) => handleClick(e)}>Click Me!</button>
            <br />
            <img onDoubleClick = {(e)=>imageClicked(e)} style = {{width: 200}}src="https://logos-world.net/wp-content/uploads/2021/08/Flash-Symbol.png" alt="Flash Logo" />
        </>
        
    );
}
export default Button;