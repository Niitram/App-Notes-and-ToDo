import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./ToDoList.module.css"
import { selectedToDo } from '../../Redux/actions/actions'

function ToDoList() {

    const allTodo = useSelector(state=>state.allTodo)
    const dispatch = useDispatch()

    const handlerSelectToDo=(e)=>{
        dispatch(selectedToDo(e.target.id))
    }

    return (
        <div className={styles.container}>
            <h2>TaskList</h2>
            <ul className={styles.ul}>
            {allTodo?.map((listTodo)=>{
                return <>
                            <li 
                                key={listTodo.id}
                                onClick={(e)=>{
                                    handlerSelectToDo(e)
                                }}
                                id={listTodo.id}
                            >{listTodo.taskTitle}</li>
                        </>
            })}
            </ul>
        </div>
    )
}

export default ToDoList