import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext';
import Task from './../Task/Task';

const CompletedTask = () => {

    const { state } = useContext(TaskContext)
    const completed = state.filter((item) => !!item.isDone)
    return (
        <div>
            <h3 className='task-title'>Completed</h3>

            {completed.length > 0 ?
                <div className='task-wrapper'>
                    {completed.map((item) => {
                        return <Task name={item.name} isDone={item.isDone} key={item.id} id={item.id} />
                    })}
                </div>

                : 'There is no items in completed list...'
            }
        </div>

    )
}

export default CompletedTask