import React from "react";
import TodoContainer from "./Components/TodoContainer";
import {connect} from "react-redux";
import AddTodo from "./Components/AddTodo";
import styles from "./Components/Todo.module.css";


const App = (props) => {
console.log(props)
    return (
        <div className='wrapper'>
            <h2 className='title'>Personal Todo</h2>
            {/*{props.state.todos.length ? <TodoContainer/> : <p className='empty'>No todos</p>}*/}
            <TodoContainer/>
        </div>
    )
}

function mapStateToProps(state) {

    return {state}

}

export default connect(mapStateToProps)(App);



