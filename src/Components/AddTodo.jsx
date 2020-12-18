import React, {useState} from 'react';

const AddTodo = (props) => {
    const [inputValue, setInputValue] = useState('');
    let submit = (e) => {
        e.preventDefault();
        props.addTodoItem(inputValue);

    }
    return (
        <form onSubmit={submit}>
            <input maxLength="32" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button type='submit'>Add todo</button>
        </form>
    );
};

export default AddTodo;
