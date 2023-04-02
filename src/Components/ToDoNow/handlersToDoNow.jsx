
//Se manejan los cambios ingresado en el input de las tareas (ToDo) y se cambia el valor del estado
export const handlerChanges =(e,setErrorsToDo,validateToDo,setInput,input)=>{
    setErrorsToDo(validateToDo({[e.target.name]: e.target.value}))
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    })
}

//Se maneja el envio de la tarea (ToDo)
export const handlerSubmit =(e,errorsToDo,dispatch,addToDo,input,setInput,setErrorsToDo,validateToDo)=>{
    e.preventDefault()
    if (!errorsToDo.description) {
        dispatch(addToDo(input))
        setInput({...input,description:"",id:input.id+1})
        setErrorsToDo(validateToDo({description: ""}))
    }
}

//Maneja el envio de la lista de tareas
export const handlerSubmitListTask =(e,errorsTitle,setTitle,dispatch,addListToDo,task,listTodo)=>{
    e.preventDefault()
    if (!errorsTitle.taskTitle) {
        setTitle({...task, tasklist: [...listTodo]})
        dispatch(addListToDo(task))
    }
}

//Se manejan los cambios ingresado en el input del titulo y se cambia el valor del estado
export const handlerTitle =(e,setErrorsTitle, validateTitle,errorsTitle,setTitle,task)=>{
    setErrorsTitle(validateTitle({[e.target.name]: e.target.value}))
    if (!errorsTitle.taskTitle) {
        setTitle({
            ...task,
            [e.target.name]: e.target.value,
        })
    }
}