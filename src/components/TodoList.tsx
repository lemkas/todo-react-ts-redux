import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchTodos } from '../store/action-creators/todo'
import { useDispatch } from 'react-redux'

const TodoList: React.FC = () => {

    const {todos, error, loading} = useTypedSelector(state => state.todo)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch<any>(fetchTodos())
    }, [dispatch])

    if (loading) {
        return <h2>Loading blyat...</h2>
    }
    
    if (todos.length === 0 && !error) {
        return <h2>Введи свое сука дело, бесполезное ты говно!</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    console.log(todos)
  return (
    <ul>
        { todos.map(todo => {
            return <li>{todo.title}</li>
        }) }
    </ul>
  )
}

export default TodoList