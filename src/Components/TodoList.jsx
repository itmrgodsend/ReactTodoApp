import React from 'react';
import TodoItem from "./TodoItem";


const TodoList = (props) => {

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
        </div>

    );
};

export default TodoList;