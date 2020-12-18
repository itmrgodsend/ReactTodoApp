import React from "react";
import TodoContainer from "./Components/TodoContainer";
import {connect} from "react-redux";


const App = (props) => {

    return (
        <div className='wrapper'>
        <h2 className='title'>Personal Todo</h2>
            {props.state.todos.length ? <TodoContainer/> : <p>No todos</p>}

        </div>
    )
}

function mapStateToProps(state) {

    return {state}

}

export default connect(mapStateToProps)(App);



