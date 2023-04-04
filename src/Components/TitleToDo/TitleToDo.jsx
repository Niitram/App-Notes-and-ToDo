import React from 'react'
import { useSelector } from 'react-redux'






//Tengo que hacer un componente que sea un form que empiece siendo un input vacio en el caso de que no haya una tarea seleccionada
//Si hay una tarea seleccionada debo mostrar el titulo de esa tarea con un boton que sea un lapiz para modificar el titulo

function TitleToDo() {

    const selectedToDo = useSelector(state=>state.selectedToDo)

    return (
        <>

            
            <form 
                onSubmit={
                    (e)=>{handlerSubmitListTask(e,errorsTitle,setTitle,dispatch,addListToDo,task,listTodo)}
                } 
                action=""
            >
                {task.taskTitle && <h1>{task.taskTitle}</h1>}
                {errorsTitle.taskTitle?<span>{errorsTitle.taskTitle}</span>:<span></span>}
                <input 
                    className={`${styles.inputTitle} ${errorsTitle.taskTitle&&styles.shake}`} 
                    value={task.taskTitle} 
                    onChange={
                        (e)=>{handlerTitle(e,setErrorsTitle, validateTitle,errorsTitle,setTitle,task)}
                        } 
                    name="taskTitle" 
                    type="text" 
                    placeholder='Task Title'
                />
                <button className={styles.btnAdd} type="submit">Add title</button>
            </form>
        </>
    )
}

export default TitleToDo