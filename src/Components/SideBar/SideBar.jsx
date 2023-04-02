import React from 'react'
import {NavLink} from "react-router-dom"
import styles from "./SideBar.module.css"

function SideBar() {
    
    return (
        <nav className={styles.container}>
            <NavLink to={"/user/:id"} >User</NavLink>
            <NavLink to={"/todo"} >ToDo</NavLink>
            <NavLink to={"/notes"} >Notes</NavLink>
            <NavLink to={"/"} >LogOut</NavLink>
        </nav>
    )
}

export default SideBar