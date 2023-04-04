import ToDoNow from "../../Components/ToDoNow/ToDoNow"
import ToDoList from "../../Components/ToDoList/ToDoList"
import styles from "../ToDoContainer/ToDoContainer.module.css"
import { useSelector } from "react-redux"
import ToDoSelected from "../../Components/ToDoSelected/ToDoSelected"


function ToDoContainer() {

    const selectedToDo = useSelector(state=>state.selectedToDo)

    return(
        <div className={styles.container}>
            <ToDoList/>
            {selectedToDo?<ToDoSelected/>:<ToDoNow/>}
            
        </div>
    )
}

export default ToDoContainer