import { useEffect, useState } from "react"
import "./App.css"
import Input from "./components/Input.js"
import TodoList from "./components/TodoList.js"

function App() {
  const InitalStorageData = JSON.parse(localStorage.getItem("todos_data")) || []
  const [input, setInput] = useState("")
  const [alltodos, setAlltodos] = useState(InitalStorageData)
  const [edit, setEdit] = useState(null)
  // console.log(input, alltodos)

  useEffect(() => {
    localStorage.setItem("todos_data", JSON.stringify(alltodos))
  }, [alltodos])
  return (
    <div className="container">
      <div className="box">
        <div className="header">
          <h1>Todo App</h1>
        </div>
        <div>
          <Input
            input={input}
            setInput={setInput}
            alltodos={alltodos}
            setAlltodos={setAlltodos}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
        <div>
          <TodoList
            alltodos={alltodos}
            setAlltodos={setAlltodos}
            setEdit={setEdit}
          />
        </div>
      </div>
    </div>
  )
}

export default App
