import React from 'react';

function TodoComp(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <form className="todo-item" >
            <input  onChange={()=> props.handleChange(props.task.id)} type="checkbox" checked={props.task.completed} ></input>
            <label style={props.task.completed ? completedStyle :  null}>{props.task.text}</label>
            <span onClick={props.delete} className="delete">x</span>

        </form>
    )
}

export default TodoComp;