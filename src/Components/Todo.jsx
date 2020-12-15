import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import Button from "@material-ui/core/Button";
import store from "../redux/redux-store";


const Todo = (props) => {
    const [inputValue, setInputValue] = useState();
    let handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(inputValue);
        console.log(props.state)
        setInputValue(' ');
    }
    return (
        <div>
            <ul>
                <TodoItem state={props.state}/>
            </ul>
            <div className='FormStyle'>
                <form onSubmit={handleSubmit}>
                    <input maxLength="32" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
                    <Button type="submit">Add todo</Button>
                </form>
            </div>
        </div>

    );

};


export default Todo;