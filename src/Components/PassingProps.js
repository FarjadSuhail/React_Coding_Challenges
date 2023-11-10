import React from 'react';

// passing props
// function PassingProps(props) {
//     return <>
//         <p>{props.name}</p>
//         <p>{props.age}</p>
//     </>
// }

// destructing props
function PassingProps({name, age}) {
    return <>
    <h1>Passing Props</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </>
}

export default PassingProps;