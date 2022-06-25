import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return{ count: state.count + 1, showText: state.showText}
        case "toggle":
            return{ count: state.count, showText: !state.showText}
        default:
            return state;
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer( reducer, { count: 0, showText: true} )

    return(
        <>
            <h1 style={{"textDecoration": "underline"}}>UseReducer</h1>
        <p>The useReducer hook is similar to useState, but gives us a more structured approach for updating complex values.</p>
        <p>We typically use useReducer when our state has multiple sub-values, e.g. an object containing keys that we want to update independently.</p>
            <section>
                <h2>{state.count}</h2>
                <button onClick={() => {
                    dispatch({ type: "INCREMENT" });
                    dispatch({ type: "toggle"});
                }}>Click here to see MAGIC!</button>
                {state.showText && <p>It's MAGIC!</p>}
            </section>
        </>
    )
}

export default UseReducer;


// import React, { useState } from 'react'

// const UseReducer = () => {
//     const [count, setCount] = useState(0);
//     const [showText, setShowText] = useState(true);

//     return(
//         <>
//             <h1 style={{"textDecoration": "underline"}}>UseReducer</h1>
//             <p>defintion</p>
//             <section>
//                 <h2>{count}</h2>
//                 <button onClick={() => {
//                     setCount(count + 1);
//                     setShowText(!showText)
//                 }}>Click here to see MAGIC!</button>
//                 {showText && <p>It's MAGIC!</p>}
//             </section>
//         </>
//     )
// }