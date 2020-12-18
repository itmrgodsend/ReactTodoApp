import TodoList from "./TodoList";
import {connect} from "react-redux";
import {addTodoCreator, changeFlagCreator, removeTodoCreator} from "../redux/root-reducer";


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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default DialogsContainer;