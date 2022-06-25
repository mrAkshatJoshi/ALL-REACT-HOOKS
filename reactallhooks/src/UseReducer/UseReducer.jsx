import React, { useState } from 'react'

const UseReducer = () => {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);

    return(
        <>
            <h1 style={{"textDecoration": "underline"}}>UseReducer</h1>
            <p>defintion</p>
            <section>
                <h2>{count}</h2>
                <button onClick={() => {
                    setCount(count + 1);
                    setShowText(!showText)
                }}>Click here to see MAGIC!</button>
                {showText && <p>It's MAGIC!</p>}
            </section>
        </>
    )
}

export default UseReducer;