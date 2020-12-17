import React from 'react';
import styles from './Todo.module.css'

const TodoItem = ({todo, changeFlag, removeTodo}) => {
    /*const TodoElement = props.state.todos.map((e) => {
        return <li key={e.id}  className='TodoListItem'><strong>{e.id}&nbsp;&nbsp;&nbsp;</strong>{e.text}</li>
    })*/
const classes = [];

if (todo.completed) {
    classes.push('done');
}
    return (
        <li >
            <span className={classes.join(' ')}>
                <input type='checkbox' onChange={() => changeFlag(todo.id)}/>
                <strong>{todo.id}</strong>
                {todo.text}
            </span>
            <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>

    );

};


export default TodoItem;