import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./ToDoList.module.css"

function ToDoList() {

    const allTodo = useSelector(state=>state.allTodo)

    return (
        <div className={styles.container}>
            <h2>TaskList</h2>
            <ul className={styles.ul}>
            {allTodo?.map((listTodo)=>{
                return <>
                    <li>{listTodo.taskTitle}</li>
                </>
            })}
            </ul>
        </div>
    )
}

export default ToDoList