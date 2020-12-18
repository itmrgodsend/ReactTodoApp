import React, {useState} from 'react';
import {Button, Input, TextField} from "@material-ui/core";
import styles from './Todo.module.css'

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
            <TextField inputProps={{maxLength: 24}}

                       size="small" label="Enter Todo" variant="outlined" maxLength="32" value={inputValue}
                       onChange={e => setInputValue(e.target.value)}/>
            <Button className={styles.add_button} variant="contained" type='submit'>Add</Button>
        </form>
    );
};

export default AddTodo;
