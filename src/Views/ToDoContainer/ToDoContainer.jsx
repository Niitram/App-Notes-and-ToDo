import ToDoNow from "../../Components/ToDoNow/ToDoNow"
import ToDoList from "../../Components/ToDoList/ToDoList"
import styles from "../ToDoContainer/ToDoContainer.module.css"


function ToDoContainer() {
    return(
        <div className={styles.container}>
            <ToDoList/>
            <ToDoNow/>
        </div>
    )
}

export default ToDoContainer