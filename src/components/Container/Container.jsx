import React, { useContext, useState } from 'react';
import CompletedTask from '../CompletedTask/CompletedTask';
import TodoTask from '../TodoTask/TodoTask';
import { ThemeContext } from './../../context/ThemeContext';
import './Container.css';
import { TaskContext } from './../../context/TaskContext';
import TaskAction from './../../constant/ActionConst';

const Container = () => {
    const { isLightTheme, toggleTheme } = useContext(ThemeContext)
    const [inputValue, setInputValue] = useState('')
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const { dispatch } = useContext(TaskContext)

    const addTask = (value) => {
        if (!inputValue) {
            alert("Please input your task name!")
            return
        }
        dispatch({ type: TaskAction.CREATE_TASK, payload: value })
        setInputValue('')
    }
    return (
        <div className={`container ${isLightTheme ? 'light' : ''}`}>
            <div onClick={toggleTheme} className="toggle-button">
                <i class="ri-sun-line"></i>
                {isLightTheme ? <i class="ri-toggle-line"></i> : <i class="ri-toggle-fill"></i>}
                <i class="ri-moon-line"></i>
            </div>
            <div className='input'>
                <input type="text" placeholder='Add new task' onChange={handleChange} value={inputValue} />
                <i className="ri-add-line" onClick={() => addTask(inputValue)}></i>
            </div>
            <TodoTask />
            <CompletedTask />
        </div>
    )
}

export default Container