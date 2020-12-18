import React from 'react';
import TodoItem from "./TodoItem";
import store from "../redux/redux-store";
import AddTodo from "./AddTodo";
import styles from './Todo.module.css'


const TodoList = (props) => {
    console.log(store.getState())

    return (
        <div>
            <ul>
                {props.state.todos.map((todo) => {
                    return <TodoItem todo={todo}
                                     key={todo.id}
                                     changeFlag={props.changeFlag}
                                     removeTodoItem={props.removeTodoItem}
                    />
                })}
            </ul>
            <div className={styles.add_todo}>
            <AddTodo addTodoItem={props.addTodoItem}/>
            </div>
        </div>

    );
};

export default TodoList;