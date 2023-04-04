import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addToDo, addListToDo } from '../../Redux/actions/actions'
import styles from "./ToDoNow.module.css"
import Todo from '../ToDo/Todo'
import { GoLogoGist, GoPlus } from "react-icons/go";
import { handlerChanges, handlerSubmit , handlerSubmitListTask, handlerTitle } from './handlersToDoNow'

function ToDoNow() {

    const dispatch = useDispatch()
    const listTodo = useSelector(state=>state.listTodo)

    useEffect(() => {
        //Al iniciar la app de tareas se inician los errores en "" para que no se puedan ingresar valores vacios
    setErrorsTitle(validateTitle({taskTitle: ""}))
    setErrorsToDo(validateToDo({description: ""}))
    }, [])
    //Se crea el estado del input de las tareas para poder ir tomando los datos de las tareas
    const [input,setInput]=useState({
        finished:false,
        description:"",
        id:Math.round(Math.random() * 100000000)
    })
    //Se crea el estado del input del titulo para poder ir tomando los datos del titulo
    const [task,setTitle]=useState({
        taskTitle:"",
        tasklist: [],
        id:Math.round(Math.random() * 100000000)
    })
    //Estado para hacer seguimiento de los errores
    const [errorsTitle,setErrorsTitle]=useState({
        taskTitle:""
    })
    const [errorsToDo,setErrorsToDo]=useState({
        description:""
    })
    //Se valida si existe errores en el title
    const validateTitle =(estado)=>{
        const errores={...errorsTitle}
        if (estado.taskTitle.length <= 0) {
                errores.taskTitle= "Please enter a Tittle"  
        }else errores.taskTitle= ""
        return errores
    }
    //Se valida si existe errores en el ToDo
    const validateToDo =(estado)=>{
        const errores={...errorsToDo}
        if (estado.description.length <= 0) {
                errores.description= "Please enter a task"  
        }else errores.description= ""
        return errores
    }

    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();


    return (
        <div className={styles.container}>
            <div>
                {/* Agregar un boton que ejecute el dispatch de guardar la lista */}

                {/* -------------------- */}
                {task.taskTitle && <h1>{task.taskTitle}</h1>}
                {errorsTitle.taskTitle?<span>{errorsTitle.taskTitle}</span>:<span></span>}
                <form 
                    onSubmit={
                        (e)=>{handlerSubmitListTask(e,errorsTitle,setTitle,dispatch,addListToDo,task,listTodo)}
                    } 
                    action=""
                >
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
                {/* ----------------- */}



                <span>{`${dia}/${mes}/${anio}`}</span>
            </div>
            <div>
                <form 
                    onSubmit={(e)=>{
                        handlerSubmit(e,errorsToDo,dispatch,addToDo,input,setInput,setErrorsToDo,validateToDo)
                    }} 
                    action="">
                    <button className={styles.btnAdd} type="submit"><GoPlus/></button>
                    <input 
                        className={styles.inputTask} 
                        onChange={(e)=>{
                            handlerChanges(e, setErrorsToDo,validateToDo,setInput,input)
                            }} 
                        value={input.description} 
                        placeholder='Add new task' 
                        type="text" 
                        name="description" 
                        id="" 
                    />
                </form>
                <ul className={styles.ul}>
                    {
                        listTodo.map((tasks,index)=>{
                            return <Todo
                            key={index}
                            description={tasks.description}
                            id={tasks.id}  
                            finished={tasks.finished} 
                            />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ToDoNow