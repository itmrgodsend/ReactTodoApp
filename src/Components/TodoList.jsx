import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types'
import store from "../redux/redux-store";

const TodoList = (props) => {
    console.log(store.getState())
    const [inputValue, setInputValue] = useState('');
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
                    return <TodoItem todo={todo} key={todo.id} changeFlag={props.changeFlag} removeTodo={props.removeTodo}/>
                })}
            </ul>
            {/*<div className='FormStyle'>
                <form onSubmit={handleSubmit}>
                    <input maxLength="32" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
                    <Button type="submit">Add todo</Button>
                </form>
            </div>*/}
        </div>

    );
};

export default TodoList;