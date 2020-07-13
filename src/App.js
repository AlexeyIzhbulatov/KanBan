import React, {useState} from 'react';
import './App.css';
import ColumnTask from "./ColumnTask";

const inititalTodos = [
    {
        name: 'Create_Task1', priority: 10, status : 'Todo'
    },
    {
        name: 'Create_Task2', priority: 20, status : 'in Progress'
    },
    {
        name: 'Create_Task3', priority: 30, status : 'Review'
    },
    {
        name: 'Create_Task4', priority: 40, status : 'Done'
    }
]

function App() {

    const [tasks, setTasks] = useState(inititalTodos)

    const [isOpenCreateTaskForm,setIsOpenCreateTaskForm] = useState(false)
    const [isActivedSumbitTask, setIsActivedSumbitTask] = useState(false)
    const [taskInput, setTaskInput] = useState('')

    const openCreateTaskForm = () => {
        setIsOpenCreateTaskForm(true)
    }

    const onTaskChange = (e) => {
        setIsActivedSumbitTask(e.target.value.length > 4)
        setTaskInput(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(taskInput)
        closeRese()
    }

    const closeRese = () => {
        setTaskInput('')
        setIsActivedSumbitTask(false)
        setIsOpenCreateTaskForm(false)
    }

  return (
    <div>
        <div className="container">
            <h1>Kanban</h1>
            {!isOpenCreateTaskForm && <button type="button" class="btn btn-primary" onClick={openCreateTaskForm}>Create Task</button>}

            {isOpenCreateTaskForm &&
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Task</label>
                    <input type="text" className="form-control" onChange={onTaskChange} value={taskInput}/>
                <button type="submit" className="btn btn-primary" disabled={!isActivedSumbitTask} onClick={submitForm}>Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={closeRese}>Cancel</button>
                </div>
            </form>
            }

            <div className="row">
                <div className="col-sm">
                    To do
                    <ColumnTask tasks={tasks} status='Todo'/>
                </div>
                <div className="col-sm">
                    in progress
                    <ColumnTask tasks={tasks} status = 'in Progress'/>
                </div>
                <div className="col-sm">
                    Review
                    <ColumnTask tasks={tasks} status = 'Review'/>
                </div>
                <div className="col-sm">
                    Done
                    <ColumnTask tasks={tasks} status = 'Done'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
dsdsd
