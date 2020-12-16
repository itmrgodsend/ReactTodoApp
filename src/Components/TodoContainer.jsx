import TodoList from "./TodoList";
import {connect} from "react-redux";
import {addTodoCreator, changeFlagCreator} from "../redux/root-reducer";


let mapStateToProps = (state) => {
    return {
        state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (inputValue) => {
            dispatch(addTodoCreator(inputValue))
        },
        changeFlag: (id) => {
            dispatch(changeFlagCreator(id))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default DialogsContainer;