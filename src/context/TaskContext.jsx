import React, { createContext, useReducer } from 'react'
import taskReducer from './../reducer/TaskReducer';

export const TaskContext = createContext()


const TaskContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(taskReducer, [], () => {
        const localStore = localStorage.getItem('tasks')
        return localStore ? JSON.parse(localStore) : []
    })
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider