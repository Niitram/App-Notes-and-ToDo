import { useState } from 'react'
import { Routes , Route , useLocation } from 'react-router-dom'
import SideBar from './Components/SideBar/SideBar'
import ToDoContainer from './Views/ToDoContainer/ToDoContainer'
import styles from "./App.module.css"

function App() {
  const locationNow = useLocation()
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div>
              {
                  locationNow.pathname !== "/" && <SideBar/>
              }
        </div>
        <Routes>
          {/* <Route path="/user/:id" element={<ProfileUser/>} /> */}
          <Route path="/todo" element={<ToDoContainer/>} />
          {/* <Route path="/notes" element={<Notes/>} /> */}
          {/* <Route path="/" element={<Login/>} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
