import React, { useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        // console.log(inputRef.current.value);//It's like doing document.getElementById directly fetching DOM element but a big NO! in React as we have virtual DOM
        inputRef.current.focus();
        // inputRef.current.value = "";//if you write something and click on button all written will be erased
    }

    return(
        <div style={{"backgroundColor": "#f15bb5", "color": "black"}}>
            
            <h1 style={{"textDecoration": "underline"}}>UseRef Hook</h1>
            <p>easiest way to accessand manuplate DOM elements</p>
            <p></p>
            <section>
                <h1>Focus!</h1>
                <p>Click on the button and it will focus text field to directly type</p>
                <p>Awesome right?</p>
                <input text='text' placeholder='Ex...' ref={inputRef}/>
                <button onClick={onClick}>Change Name</button>
            </section>
            <hr/>
        </div>
    )
}
export default UseRef;