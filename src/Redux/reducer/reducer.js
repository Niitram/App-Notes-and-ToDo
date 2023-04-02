import { ADD_ToDo, DELETE_ToDo, GET_ALL_ToDo, DELETE_NOTES, ADD_NOTES, GET_ALL_NOTES, DELETE_LIST_ToDo, ADD_LIST_ToDo, FINISHED_ToDo, ADD_NAME_LIST_TODO } from "../actions/types";


const initialState = {
    allNotes: [],
    allTodo: [],
    listTodo: [],

}




const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        /* LOGICA DE ToDo */
        case ADD_ToDo:
            return {
                ...state,
                listTodo: [...state.listTodo, action.payload]
            }
        case DELETE_ToDo:
            return {
                ...state,
                listTodo: state.listTodo.filter(todo => todo.id != action.payload)
            }
        case FINISHED_ToDo:
            return {
                ...state,
                listTodo: state.listTodo.map((todo) => {
                    if (todo.id == action.payload) {
                        if (todo.finished) {
                            return { ...todo, finished: false }
                        }
                        return { ...todo, finished: true }
                    } else {
                        return todo
                    }
                })
            }
        case GET_ALL_ToDo:
            return {
                ...state,
                allTodo: [...state.allTodo, action.payload]
            }

        case ADD_LIST_ToDo:
            //Chequea que la lista que llega por payload exista o no en la lista de tareas y si existe lo modifica con lo que trae nuevo
            const encontrado = state.allTodo.find(todos => todos.id === action.payload.id)
            if (encontrado) {
                const index = state.allTodo.findIndex((obj) => obj.id === action.payload.id);
                const newTasks = [...state.allTodo];
                newTasks[index] = {
                    ...newTasks[index],
                    ...action.payload,
                };
                return {
                    ...state,
                    allTodo: newTasks
                }
            }
            return {
                ...state,
                allTodo: [...state.allTodo, action.payload]
            }
        case DELETE_LIST_ToDo:
            return {
                ...state,
                allTodo: state.allTodo.filter(allTodo => allTodo.id !== action.payload)
            }
        case ADD_NAME_LIST_TODO:
            return {
                ...state
            }

        /* LOGICA DE NOTES */
        case ADD_NOTES:
            return {
                ...state,
                allNotes: [...state.allNotes, action.payload]
            }
        case DELETE_NOTES:
            return {
                ...state,
                allNotes: state.allNotes.filter(note => note.id !== action.payload)
            }
        case GET_ALL_NOTES:
            return {
                ...state,
                allNotes: [...state.allNotes, action.payload]
            }

        default:
            return { ...state }
    }
}

export default rootReducer