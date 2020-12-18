import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import store from "../redux/redux-store";
import AddTodo from "./AddTodo";


const TodoList = (props) => {
    console.log(store.getState())
    /* let handleSubmit = (e) => {
         e.preventDefault()
         if (inputValue !== '') {
             props.addTodo(inputValue);
             setInputValue(' ');
             console.log(props.state)
         }
     }*/

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
            <AddTodo addTodoItem={props.addTodoItem}/>
        </div>

    );
};

export default TodoList;