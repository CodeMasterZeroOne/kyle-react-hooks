import React from 'react'
import { Button } from '@mui/material'
import { ACTIONS } from './L07useReducer.js'

export default function ToDo({ todo, dispatch }) {
    return (
        <div>
            <span style={{ color: todo.completed ? 'green' : 'orange', textDecoration: todo.completed ? 'line-through' : 'none', margin: 20 }}>{todo.name}</span>
            <Button variant='outlined' color='primary' style={{ margin: 10 }} onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</Button>
            <Button variant='outlined' color='secondary' style={{ margin: 10 }} onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</Button>
        </div>
    )
}
