import React, { useContext } from 'react'
import Task from '../Task/Task'
import { TaskContext } from './../../context/TaskContext';

const TodoTask = () => {

    const { state } = useContext(TaskContext)
    const todo = state.filter((item) => !item.isDone)
    return (
        <div>
            <h3 className='task-title'>Todo</h3>

            {todo.length > 0 ?
                <div className='task-wrapper'>
                    {todo.map((item) => {
                        return <Task name={item.name} isDone={item.isDone} key={item.id} id={item.id} />
                    })}
                </div>
                : 'There is no items in to do list...'
            }
        </div>

    )
}

export default TodoTask