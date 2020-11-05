import React from 'react';
import '../index.css'

const TodoListItem = (props) => {

    const TodoElement = props.store.map((e) => {
        return <li key={e.toString()} className='TodoListItem'>{e.text}</li>
    })

    return (
        <div >
                {TodoElement}
        </div>

    );

};



export default TodoListItem;