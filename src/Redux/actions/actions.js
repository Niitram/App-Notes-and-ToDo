import { SELECTED_ToDo, ADD_ToDo, DELETE_ToDo, GET_ALL_ToDo, DELETE_NOTES, ADD_NOTES, GET_ALL_NOTES, DELETE_LIST_ToDo, ADD_LIST_ToDo, FINISHED_ToDo, ADD_NAME_LIST_TODO } from "./types"

const URL_HOLDER = "https://jsonplaceholder.typicode.com/todos"


export const addListToDo = (toDo) => {
    return {
        type: ADD_LIST_ToDo,
        payload: toDo,
    }
}
export const addNameListToDo = (value) => {
    return {
        type: ADD_NAME_LIST_TODO,
        payload: value,
    }
}
export const deleteListToDo = (id) => {
    return {
        type: DELETE_LIST_ToDo,
        payload: id,
    }
}
export const addToDo = (toDo) => {
    return {
        type: ADD_ToDo,
        payload: toDo,
    }
}
export const finishedToDo = (id) => {
    return {
        type: FINISHED_ToDo,
        payload: id,
    }
}
export const deleteToDo = (id) => {
    return {
        type: DELETE_ToDo,
        payload: id,
    }
}

export const getAllToDo = () => {
    return function (dispatch) {
        fetch(`URL_HOLDER`)
            .then(response => response.json())
            .then(response => dispatch({ type: GET_ALL_ToDo, payload: response }))
    }
}

export const selectedToDo = (id) => {
    return {
        type: SELECTED_ToDo,
        payload: id
    }
}


export const addNotes = (toDo) => {
    return {
        type: ADD_NOTES,
        payload: toDo,
    }
}
export const DELETE_Notes = (id) => {
    return {
        type: DELETE_NOTES,
        payload: id,
    }
}
export const getAllNotes = (id) => {
    return function (dispatch) {
        fetch(`URL_HOLDER`)
            .then(response => response.json())
            .then(response => dispatch({ type: GET_ALL_NOTES, payload: response }))
    }
}