import TaskAction from "../constant/ActionConst";
import { v1 as uuidv1 } from 'uuid'

const taskReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case TaskAction.CREATE_TASK: {
            {
                const newTask = { id: uuidv1(), name: payload, isDone: false }
                localStorage.setItem('tasks', JSON.stringify([...state, newTask]))
                return [...state, newTask]
            }
        }
        case TaskAction.DELETE_TASK: {
            state = state.filter(task => task.id !== payload)
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        }
        case TaskAction.UPDATE_TASK: {
            const task = state.find(task => task.id === payload)
            state = state.filter(task => task.id !== payload)
            task.isDone = !task.isDone

            localStorage.setItem('tasks', JSON.stringify([...state, { ...task, isDone: !task.isDone }]))

            return [...state, { ...task, isDone: !task.isDone }]
        }
        default: {
            return [...state]
        }

    }
}

export default taskReducer