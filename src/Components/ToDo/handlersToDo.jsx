//Se dispatcha la orden de eliminar una tarea
export const handlerDelete =(id,dispatch,deleteToDo)=>{
    dispatch(deleteToDo(id))
}

//Se dispatcha la orden de marcar una tarea como finalizada o se quita el finalizado
export const handlerFinished =(id,dispatch,finishedToDo)=>{
    dispatch(finishedToDo(id))
}