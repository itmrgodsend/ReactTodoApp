import React from 'react';
import styles from './Todo.module.css'

const TodoItem = ({todo, changeFlag}) => {
    /*const TodoElement = props.state.todos.map((e) => {
        return <li key={e.id}  className='TodoListItem'><strong>{e.id}&nbsp;&nbsp;&nbsp;</strong>{e.text}</li>
    })*/

    return (
        <li >
            <span>
                <input type='checkbox' onChange={() => changeFlag(todo.id)}/>
                <strong>{todo.id}</strong>
                {todo.text}
            </span>
            <button className='rm'>&times;</button>
        </li>

    );

};


export default TodoItem;