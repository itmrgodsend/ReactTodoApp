const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const CHANGE_FLAG = 'CHANGE_FLAG';

let initialState = {
    todos: [
        {id: 1, completed: false, text: 'Начать использовать список дел'},
    ]
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: state.todos.length + 1,
                    completed: false,
                    text: action.inputValue
                }]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case CHANGE_FLAG:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (action.id === todo.id) {
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
export const removeTodoCreator = (id) => ({type: REMOVE_TODO, id})
export const changeFlagCreator = (id) => ({type: CHANGE_FLAG, id})

export default rootReducer;