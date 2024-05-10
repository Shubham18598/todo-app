import React from "react"
import { CiEdit } from "react-icons/ci"
import { MdDelete } from "react-icons/md"
import { FaRegThumbsUp } from "react-icons/fa"
import { FaRegThumbsDown } from "react-icons/fa"

const TodoList = ({ alltodos, setAlltodos, setEdit }) => {
  const handleDelete = (t) => {
    setAlltodos(alltodos.filter((todo) => todo.id !== t.id))
  }

  const handleComplete = (t) => {
    setAlltodos(
      alltodos.map((todo) => {
        if (todo.id === t.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    )
  }

  const handleEdit = (t) => {
    const findTodo = alltodos.find((todo) => todo.id === t.id)
    setEdit(findTodo)
  }

  return (
    <div style={{ marginTop: "20px" }} className="todolist-container">
      {alltodos.map((t) => (
        <ul className="todolist" key={t.id}>
          <input
            type="text"
            value={t.title}
            className="list-item"
            onChange={(e) => e.preventDefault()}
          />

          <div>
            <button
              className="toggle-button task-button"
              onClick={() => handleComplete(t)}
            >
              {t.completed ? <FaRegThumbsUp /> : <FaRegThumbsDown />}
            </button>
            <button
              className="edit-button task-button"
              onClick={() => handleEdit(t)}
            >
              <CiEdit />
            </button>
            <button
              className="delete-button task-button"
              onClick={() => handleDelete(t)}
            >
              <MdDelete />
            </button>
          </div>
        </ul>
      ))}
    </div>
  )
}

export default TodoList
