import React from 'react';
import '../index.css'

const TodoItem = (props) => {

    const TodoElement = props.state.todos.map((e) => {
        return <li key={e.id}  className='TodoListItem'>{e.text}</li>
    })

    return (
        <div >
                {TodoElement}
        </div>

    );

};



export default TodoItem;