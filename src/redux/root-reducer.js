const ADD_TODO = 'ADD_TODO';
const CHANGE_FLAG = 'CHANGE_FLAG';

let initialState = {
    todos: [
        {id: 1, completed: false, text: 'text'},
        {id: 2, completed: false, text: 'text2'},
        {id: 3, completed: false, text: 'text3'}
    ]
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: state.todos.length + 1,
                    text: action.inputValue
                }]
            }
        case CHANGE_FLAG:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if(action.id === todo.id){
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}

export const addTodoCreator = (inputValue) => ({type: ADD_TODO, inputValue})
export const changeFlagCreator = (id) => ({type: CHANGE_FLAG, id})

export default rootReducer;