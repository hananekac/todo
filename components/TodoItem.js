import React from 'react'

function TodoItem(props){
    
    return ( 
        <div className="todo-item">
            <input type="checkbox"  style={{ textDecoration : props.todo.completed && "line-through" }}/>
            <p>{props.todo.text}</p>
        </div>
    )
}

export default TodoItem