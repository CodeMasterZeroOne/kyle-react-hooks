import { TextField } from '@mui/material'
import React, { useState, useReducer } from 'react'
import ToDo from './ToDo.js'


function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)

        default:
            return todos
    }
}
function newTodo(name) {
    return { id: Date.now(), name: name, completed: false }
}

export const ACTIONS = {
    ADD_TODO: 'addToDo',
    TOGGLE_TODO: 'toggleToDo',
    DELETE_TODO: 'deleteToDo',
}

export default function L07useReducer() {
    const [todos, dispatch] = useReducer(reducer, [])

    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }

    return (
        <>
            <h4>useReducer</h4>
            <form onSubmit={handleSubmit}>
                <h6>To Do's</h6>
                <TextField type='text' label='Add To Do' value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todos.map(todo => {
                return <ToDo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </>
    )
}


// function reducer(state, action) {
//     switch (action.type) {
//         case ACTIONS.INCREMENT:
//             return { counter: state.counter + 1 }
//         case ACTIONS.DECREMENT:
//             return { counter: state.counter - 1 }

//         default:
//             return state
//     }
// }

// const ACTIONS={
//     INCREMENT:'increment',
//     DECREMENT:'decrement'
// }

// export default function L07useReducer() {
//     const [state, dispatch] = useReducer(reducer, { counter: 0 })
//     // const [counter, setCounter] = useState(0)

//     function increment() {
//         // setCounter(prevCounter => prevCounter + 1)
//         dispatch({ type: ACTIONS.INCREMENT })
//     }
//     function decrement() {
//         // setCounter(prevCounter => prevCounter - 1)
//         dispatch({ type: ACTIONS.DECREMENT })
//     }

//     return (
//         <>
//             <h4>useReducer</h4>

//             <Button onClick={decrement} variant='outlined' >-</Button>
//             <span style={{ margin: 20 }}>{state.counter}</span>
//             <Button onClick={increment} variant='outlined'>+</Button>
//         </>
//     )
// }