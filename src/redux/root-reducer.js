const ADD_TODO = 'ADD_TODO';

let initialState = {
    todos: [
        {id: 1, completed: false, text: 'lol'}
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
        default:
            return state;
    }
}

export const addTodoCreator = (inputValue) => ({type: ADD_TODO, inputValue})

export default rootReducer;