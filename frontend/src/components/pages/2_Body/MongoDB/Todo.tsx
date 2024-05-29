import React from 'react'
import TodoTable from './TodoTable'
import TodoHeader from './TodoHeader'
import { useTodoHooks } from '../../../../hooks/todos/TodoHooks'
import { Alert, Snackbar } from '@mui/material'

const Todo: React.FC = () => {
    const {
        todos,
        username,
        setUsername,
        title,
        setTitle,
        contents,
        setContents,
        onHandleParam,
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
    } = useTodoHooks()

    return (
        <div>
            <h1>Todos</h1>
            <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    sx={{ width: '100%' }}
                >
                    {error}
                </Alert>
            </Snackbar>
            <TodoHeader
                username={username}
                setUsername={setUsername}
                title={title}
                setTitle={setTitle}
                contents={contents}
                setContents={setContents}
                onInsertHandle={onInsertHandle}
                onUpdateSelected={onUpdateSelected}
            />
            <TodoTable
                todos={todos}
                onHandleParam={onHandleParam}
                onSelectRow={onSelectRow}
                onToggleEditMode={onToggleEditMode}
                onToggleSelectAll={onToggleSelectAll}
                selectAll={selectAll}
            />
        </div>
    )
}

export default Todo
