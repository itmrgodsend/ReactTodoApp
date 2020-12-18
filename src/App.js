import React from "react";
import TodoContainer from "./Components/TodoContainer";
import {connect} from "react-redux";


const App = (props) => {

    return (
        <div className='wrapper'>

            {props.state.todos.length ? <TodoContainer/> : <p>No todos</p>}

        </div>
    )
}

function mapStateToProps(state) {

    return {state}

}

export default connect(mapStateToProps)(App);



