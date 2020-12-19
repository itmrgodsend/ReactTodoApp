import React from "react";
import {connect} from "react-redux";
import TodoList from "./Components/TodoList";
import {addTodoCreator, changeFlagCreator, removeTodoCreator} from "./redux/root-reducer";
import styles from "./Components/Todo.module.css";
import AddTodo from "./Components/AddTodo";


const App = (props) => {
    return (
        <div className='wrapper'>
            <h2 className='title'>Personal Todo</h2>
            {props.state.todos.length ? <TodoList state={props.state}
                                                  changeFlag={props.changeFlag}
                                                  removeTodoItem={props.removeTodoItem}
            /> : <p className='empty'>No todos</p>}
            <div className={styles.add_todo}>
                <AddTodo addTodoItem={props.addTodoItem}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeFlag: (id) => {
            dispatch(changeFlagCreator(id))
        },
        removeTodoItem: (id) => {
            dispatch(removeTodoCreator(id))
        },
        addTodoItem: (inputValue) => {
            dispatch(addTodoCreator(inputValue))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



