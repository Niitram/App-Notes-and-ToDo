import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addToDo, deleteToDo, finishedToDo, addListToDo } from '../../Redux/actions/actions'
import styles from "./ToDoNow.module.css"
import Todo from '../ToDo/Todo'
import { GoLogoGist, GoPlus } from "react-icons/go";

function ToDoNow() {

    const dispatch = useDispatch()
    const listTodo = useSelector(state=>state.listTodo)
    useEffect(() => {
    setErrors(validateTitle({taskTitle: ""}))
    setErrors(validateToDo({description: ""}))
    
    return () => {
        
    }
    }, [])
    

    //Se crea el estado del input de las tareas para poder ir tomando los datos de las tareas
    const [input,setInput]=useState({
        finished:false,
        description:"",
        id:1
    })
    //Se crea el estado del input del titulo para poder ir tomando los datos del titulo
    const [title,setTitle]=useState({
        taskTitle:"",
        tasklist: []
    })
    //Estado para hacer seguimiento de los errores
    const [errors,setErrors]=useState({
        taskTitle:"",
        description:""
    })

    //Se valida si existe errores en el title
    const validateTitle =(estado)=>{
        const errores={...errors}
        if (estado.taskTitle.length <= 0) {
            console.log("entre aca");
                errores.taskTitle= "Please enter a Tittle"  
        }else errores.taskTitle= ""
        return errores
    }
    //Se valida si existe errores en el ToDo
    const validateToDo =(estado)=>{
        const errores={...errors}
        if (estado.description.length <= 0) {
                errores.description= "Please enter a task"  
        }else errores.description= ""
        return errores
    }


    //Se manejan los cambios ingresado en el input y se cambia el valor del estado
    const handlerChanges =(e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(validateToDo({[e.target.name]: e.target.value}))
        
    }
    //
    const handlerSubmit =(e)=>{
        e.preventDefault()
        if (!errors.description) {
            dispatch(addToDo(input))
            setInput({...input,description:"",id:input.id+1})
        }
        
    }
    //Se dispatcha la orden de eliminar una tarea
    const handlerDelete =(id)=>{
        dispatch(deleteToDo(id))
    }
    //Se dispatcha la orden de marcar una tarea como finalizada o se quita el finalizado
    const handlerFinished =(id)=>{
        dispatch(finishedToDo(id))
    }

    const handlerSubmitListTask =(e)=>{
        e.preventDefault()
        setTitle({...title, tasklist: [...listTodo]})
        if (!errors.taskTitle) {
            dispatch(addListToDo(title))
        }
        
    }
    //Se manejan los cambios ingresado en el input del titulo y se cambia el valor del estado
    const handlerTitle =(e)=>{
        setTitle({
            ...title,
            [e.target.name]: e.target.value,
        })
        setErrors(validateTitle({[e.target.name]: e.target.value}))
    }

    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();


    return (
        <div className={styles.container}>
            <div>
                {title.taskTitle && <h1>{title.taskTitle}</h1>}
                {errors.taskTitle?<span>{errors.taskTitle}</span>:<span></span>}
                <form onSubmit={handlerSubmitListTask} action="">
                    <input className={styles.inputTitle} value={title.taskTitle} onChange={handlerTitle} name="taskTitle" type="text" placeholder='Task Title'/>
                    <button className={styles.btnAdd} type="submit">Add title</button>
                </form>
                
                <span>{`${dia}/${mes}/${anio}`}</span>
            </div>
            <div>
                <form onSubmit={handlerSubmit} action="">
                    <button className={styles.btnAdd} type="submit"><GoPlus/></button>
                    <input className={styles.inputTask} onChange={handlerChanges} value={input.description} placeholder='Add new task' type="text" name="description" id="" />
                </form>
                <ul>
                    {
                        listTodo.map((task)=>{
                            return <Todo 
                            description={task.description}
                            id={task.id}  
                            finished={task.finished} 
                            handlerDelete={handlerDelete}
                            handlerFinished={handlerFinished}
                            />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ToDoNow