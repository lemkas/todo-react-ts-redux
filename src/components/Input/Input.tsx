import { useState, ChangeEventHandler, MouseEventHandler } from "react"


const Input = () => {

  const [newTodo, setNewTodo] = useState('')

  const inputHandler: ChangeEventHandler<HTMLInputElement> = (e):void => {
    setNewTodo(e.target.value)
  }

  const createButtonHandler: MouseEventHandler = (e):void => {
    console.log(newTodo)
    setNewTodo('')
  }

  return (
    <div className='input-wrap'>
        <input onChange={inputHandler} className='input-todo' type="text" placeholder='Введи свое бесполезное дело, кусок ты лентяя'/>
        <a href='#' onClick={createButtonHandler} className='button-add'>Add</a>
    </div>
  )
}

export default Input