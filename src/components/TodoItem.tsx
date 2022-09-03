import React, { useState } from 'react'
import { ChangeEventHandler } from "react"


interface ITodoItem {
    title: string,
    completed: boolean,
    key: number,
}


const TodoItem = ({ title, completed, key }: ITodoItem)=> {
  
  const [check, setCheck] = useState(completed)
  const completedCheckboxHandler: ChangeEventHandler<HTMLInputElement> = (e):void => {
    setCheck(!completed)
    if (check) {
      classes.push('completed-todo')
  } else {
    console.log(check)
  }

  }
    
    let classes: Array<String> = ['todo-list-item-text']
    if (check) {
        classes.push('completed-todo')
    } else {
      classes.splice(1, 1)
    }

  return (
    <div className='todo-list-item'>
      <input type="checkbox" defaultChecked={completed} onChange={completedCheckboxHandler}/>
      <li className={classes.join(' ')} key={key}>{title}</li>
    </div>
  )
}

export default TodoItem