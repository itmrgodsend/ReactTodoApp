import React, {useState} from 'react';

const AddTodo = (props) => {
    const [inputValue, setInputValue] = useState('');
    let submit = (e) => {
        e.preventDefault();
        if (inputValue !== '') {
            props.addTodoItem(inputValue);
            setInputValue(' ');
        }

    }
    return (
        <form onSubmit={submit}>
            <input maxLength="32" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button type='submit'>Add todo</button>
        </form>
    );
};

export default AddTodo;
