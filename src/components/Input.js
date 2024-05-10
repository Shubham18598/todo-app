import React, { useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

const Input = (props) => {
  const onInputChange = (e) => {
    props.setInput(e.target.value)
  }

  const updateTodo = (title, id, completed) => {
    const newTodo = props.alltodos.map((todo) =>
      todo.id === id ? { id, title, completed } : todo
    )
    props.setAlltodos(newTodo)
    props.setEdit("")
  }
  useEffect(() => {
    if (props.edit) {
      props.setInput(props.edit.title)
    } else {
      props.setInput("")
    }
  }, [props.setInput, props.edit])
  const handleAdd = (e) => {
    e.preventDefault()
    // console.log("click")
    if (!props.edit) {
      props.setAlltodos([
        ...props.alltodos,
        { id: uuidv4(), title: props.input, completed: false },
      ])
      props.setInput("")
    } else {
      updateTodo(props.input, props.edit.id, props.edit.completed)
    }
  }
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter Something"
        className="input-task"
        value={props.input}
        onChange={onInputChange}
        required
      />
      <button className="add-button" type="Submit">
        {props.edit ? "Update" : "Add"}
      </button>
    </form>
  )
}

export default Input
