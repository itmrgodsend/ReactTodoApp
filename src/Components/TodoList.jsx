import React from 'react';
import TodoItem from "./TodoItem";
import store from "../redux/redux-store";
import AddTodo from "./AddTodo";
import styles from './Todo.module.css'
import TodoContainer from "./TodoContainer";


const TodoList = (props) => {
    console.log(store.getState())

    return (
        <div>
            <ul>
                {props.state.todos.length ?

                props.state.todos.map((todo) => {
                    return <TodoItem todo={todo}
                                     key={todo.id}
                                     changeFlag={props.changeFlag}
                                     removeTodoItem={props.removeTodoItem}
                    />
                })

                : <p className='empty'>No todos</p>}

            </ul>
            <div className={styles.add_todo}>
                <AddTodo addTodoItem={props.addTodoItem}/>
            </div>
        </div>

    );
};

export default TodoList;