import React, { useState } from 'react';

const UseState = () => {
    const [initialValue, setInitialValue] = useState(0)
    const [ initialText, setInitialText ] = useState("Edit This!");


    let onclick = () => {
        setInitialValue(initialValue + 1);
    }
    
    let onChange = (event) => {
        setInitialText(event.target.value);
    }

    return(
        <div>
            <q>State generally refers to data or properties that need to be tracking in an application.</q>
            <hr/>
            <h1 style={{"textDecoration": "underline"}}>UseState Hook</h1>
            <p>The React useStateHook allows us to track state in a function component.</p>
            <section>
                <div>
                    <h2>Project 1:</h2>
                    <span style={{"paddingRight": "10px"}}>{initialValue}</span>
                    <button onClick={onclick}>Increment</button>
                </div>
            </section>
            <hr/>
            <section>
                <div>
                    <h2>Project 2:</h2>
                    <input placeholder="Please enter here something" onChange={onChange}/>
                    <span style={{"paddingLeft": "10px"}}>{initialText}</span>
                </div>
            </section>
            <hr />
        </div>
    )
}

export default UseState