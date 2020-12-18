import React from 'react';
import styles from './Todo.module.css'
import CancelIcon from '@material-ui/icons/Cancel';
import {IconButton} from "@material-ui/core";

const TodoItem = ({todo, changeFlag, removeTodoItem}) => {

    const classes = [];

    if (todo.completed) {
        classes.push('done');
    }
    return (
        <li className={styles.todo_li}>
            <span className={classes.join(' ')}>
                <input className={styles.todo_field} type='checkbox' onChange={() => changeFlag(todo.id)}/>
                <strong className={styles.todo_id}>{todo.id}</strong>
                {todo.text}
            </span>
            <IconButton  onClick={() => removeTodoItem(todo.id)}><CancelIcon fontSize="small" /></IconButton>

        </li>

    );

};


export default TodoItem;