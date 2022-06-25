import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffect = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
        setData(response.data[0].email);
        console.log("API! was Called");
        })
    }, [])

    return(
        <div style={{"backgroundColor": "#fee440", "color": "black"}}>
            <h1 style={{"textDecoration": "underline"}}>UseEffect Hook</h1>
            <p>The useEffect hook runs after the component renders. We provide a callback function in first parameter and the second parameter contains a dependency array in which <br/> if we provide any value, and if any of the value will change, the component will re-render with that updated value. </p>
            <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. </p>
            <section>
                <div> 
                    <h2>{data}</h2>
                    <h2>{count}</h2>
                    <button onClick={() => setCount(count + 1)}>Click! Here</button>
                </div>
            </section>
            <hr/>
        </div>
    )
}

export default UseEffect