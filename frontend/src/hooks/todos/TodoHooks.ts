import { useEffect, useState } from 'react'
import axios from 'axios'
import { TodoType } from '../../types/todos/TodoTypes'
import { Types } from 'mongoose'
import React from 'react'
import { AlertColor } from '@mui/material'

export const useTodoHooks = () => {
    const [todos, setTodos] = useState<TodoType[]>([])
    const [username, setUsername] = useState('')
    const [title, setTitle] = useState('Programming')
    const [contents, setContents] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [selectAll, setSelectAll] = useState(false)

    const [severity, setSeverity] = useState<AlertColor | undefined>('error')
    const [openAlert, setOpenAlert] = useState(false)

    useEffect(() => {
        fetchTodos()
    }, [])

    const setInitialState = () => {
        setUsername('')
        setTitle('Programming')
        setContents('')
    }
    const handleClose = (
        event?: React.SyntheticEvent<any, Event> | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenAlert(false)
    }

    const showError = (severity: string, message: string) => {
        setSeverity(severity as AlertColor)
        setError(message)
        setOpenAlert(true)
    }

    const fetchTodos = async () => {
        try {
            const response = await axios.get<TodoType[]>(
                'http://localhost:5001/api/todos'
            )
            response && setTodos(response.data)
        } catch (error) {
            console.error('Error fetching todos:', error)
        }
    }

    const onHandleParam = (
        row: TodoType,
        field: keyof TodoType,
        value: any
    ) => {
        const updatedTodo = todos.map((todo) =>
            todo._id === row._id ? { ...todo, [field]: value } : todo
        )
        console.log(`Updated ${field}: ${value}`)
        setTodos(updatedTodo)
    }

    const onHandleDelete = async (row: TodoType) => {
        try {
            const response = await axios.delete(
                `http://localhost:5001/api/todos/${row._id}`
            )
            console.log(response.data)
            fetchTodos()
        } catch (error) {
            console.error('Error deleting user:', error)
        }
    }

    const onUpdateHandle = async (row: TodoType) => {
        try {
            const todo = todos.find((todo) => todo._id === row._id)

            if (!todo) {
                showError('error', 'Todo not found for update.')
                return
            }

            const hasChanges = Object.keys(todo).some(
                (key) =>
                    todo[key as keyof TodoType] !== row[key as keyof TodoType]
            )
            if (!hasChanges) {
                showError('error', 'No changes detected.')
                return
            }

            const newTodo = {
                ...todo,
                time: new Date(),
            }
            await axios.put(
                `http://localhost:5001/api/todos/${row._id}`,
                newTodo
            )

            fetchTodos()
            showError('success', 'OK UPDATE')
        } catch (error) {
            showError('error', 'Error updating todo.')
        }
    }

    const onInsertHandle = async () => {
        if (checkoutInsert()) {
            showError('error', 'Please fill in all fields.')
            return
        }

        const existingTodo = todos.find(
            (todo) =>
                todo.username === username &&
                todo.title === title &&
                todo.contents === contents
        )

        if (existingTodo) {
            showError(
                'error',
                'Todo with the same username, title, and content already exists.'
            )
            return
        }

        const newTodo: TodoType = {
            username,
            title,
            contents,
            likeCount: 0,
            completed: false,
            time: new Date(),
        }
        const response = await axios.post<TodoType>(
            'http://localhost:5001/api/todos',
            newTodo
        )
        if (response.status === 200 || response.status === 201) {
            fetchTodos()
            showError('success', 'Insert completed')
            setInitialState()
        } else {
            showError('error', 'Error inserting todo.')
        }
    }

    const checkoutInsert = () => !username || !title || !contents

    const onSelectRow = (id: Types.ObjectId) => {
        const updatedTodos = todos.map((todo) =>
            todo._id === id
                ? {
                      ...todo,
                      selected: !todo.selected,
                      editMode: !todo.editMode,
                  }
                : todo
        )
        setTodos(updatedTodos)
    }

    const onToggleEditMode = (id: Types.ObjectId) => {
        const updatedTodos = todos.map((todo) =>
            todo._id === id ? { ...todo, delete: !todo.delete } : todo
        )
        setTodos(updatedTodos)
    }

    const onUpdateSelected = async () => {
        const selectedTodos = todos.filter((todo) => todo.selected)
        for (const todo of selectedTodos) {
            await onUpdateHandle(todo)
        }
    }

    const onToggleSelectAll = () => {
        const updatedTodos = todos.map((todo) => ({
            ...todo,
            selected: !selectAll,
            editMode: !todo.editMode,
        }))
        setTodos(updatedTodos)
        setSelectAll(!selectAll)
    }

    return {
        todos,
        username,
        setUsername,
        title,
        setTitle,
        contents,
        setContents,
        onHandleParam,
        onHandleDelete,
        onUpdateHandle,
        onInsertHandle,
        onSelectRow,
        onToggleEditMode,
        onUpdateSelected,
        onToggleSelectAll,
        selectAll,
        error,
        severity,
        openAlert,
        handleClose,
    }
}
