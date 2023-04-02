import React from 'react'
import styles from "./ToDo.module.css"
import { GoCheck,GoTrashcan } from "react-icons/go";

function Todo({description, id , finished , handlerDelete , handlerFinished }) {
    return (
        <div key={id} className={`${styles.container} ${finished?styles.clase2:styles.clase1}`}>
            <span className={styles.description} >{description}</span>
            <div>
                <button className={styles.button} onClick={()=>{handlerDelete(id)}}><GoTrashcan/></button>
                <button className={styles.button} onClick={()=>{handlerFinished(id)}}><GoCheck/></button>
            </div>
        </div>
    )
}

export default Todo