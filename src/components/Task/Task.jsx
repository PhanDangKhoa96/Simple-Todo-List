import React, { useContext } from 'react'
import './Task.css'
import { TaskContext } from './../../context/TaskContext';
import TaskAction from './../../constant/ActionConst';

const Task = ({ name, isDone, id }) => {
    const { state, dispatch } = useContext(TaskContext)

    const deleteTask = () => {
        dispatch({ type: TaskAction.DELETE_TASK, payload: id })
    }

    const updateTask = () => {
        dispatch({ type: TaskAction.UPDATE_TASK, payload: id })
    }
    return (

        <div className={`task ${isDone ? 'completed' : ''}`}  >
            <div className='task__content'>
                {isDone ? <i className="ri-checkbox-blank-circle-fill"></i> : <i className="ri-checkbox-blank-circle-line"></i>}
                <span>{name}</span>
            </div>

            <span className='task__buttons'>
                {isDone ? <i className="ri-arrow-go-forward-line" onClick={() => updateTask()}></i> : <i className="ri-check-line" onClick={() => updateTask()}></i>}
                <i className="ri-close-line" onClick={() => deleteTask()}></i>
            </span>
        </div>



    )
}

export default Task