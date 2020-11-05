import React, {useState} from 'react';
import TodoListItem from "./TodoListItem";
import Button from "@material-ui/core/Button";


const AddTodo = (props) => {
    const [inputValue, setInputValue] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        props.store.push({text: inputValue, id: });
        console.log(props.store)
        setInputValue(' ');
    }
    return (
        <div>
            <ul>
                <TodoListItem store={props.store}/>
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


export default AddTodo;