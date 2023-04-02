import React from 'react'
import styles from "./ToDo.module.css"
import { GoCheck,GoTrashcan } from "react-icons/go";
import { handlerDelete, handlerFinished } from './handlersToDo';
import { useDispatch } from 'react-redux';
import { deleteToDo ,finishedToDo } from '../../Redux/actions/actions';

function Todo({description, id , finished }) {
    const dispatch = useDispatch()
    return (
        <div key={id} className={`${styles.container} ${finished?styles.clase2:styles.clase1}`}>
            <span className={styles.description} >{description}</span>
            <div>
                <button className={styles.button} onClick={()=>{handlerDelete(id,dispatch,deleteToDo)}}><GoTrashcan/></button>
                <button className={styles.button} onClick={()=>{handlerFinished(id,dispatch,finishedToDo)}}><GoCheck/></button>
            </div>
        </div>
    )
}

export default Todo