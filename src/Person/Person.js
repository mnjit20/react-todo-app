import React from 'react';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Name: {props.name}  - Age:  {props.age}    </p>
            <p> {props.children} </p> 
            <input type="text" onChange={props.changed} />
        </div>
    )
};

export default person;