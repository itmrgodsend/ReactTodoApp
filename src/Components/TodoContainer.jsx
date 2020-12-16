import Todo from "./Todo";
import {connect} from "react-redux";
import {addTodoCreator} from "../redux/root-reducer";

let mapStateToProps = (state) => {
    return {
        state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (inputValue) => {
            dispatch(addTodoCreator(inputValue))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default DialogsContainer;