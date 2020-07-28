import React, {useState} from 'react';
import './App.css';
import ColumnTask from "./ColumnTask";
import {v4 as uuidv4} from 'uuid';

const [isOpenTaskForm, setIsOpenTaskForm] = useState(false)

function App() {

    const [task, setTask] = useState('')

    const addTask = () => {
        console.log(task)
        setTask('')
    }

    return (
        <div>
            <div className="container">
                <h1>Kanban</h1>
                {! && <button type="button" className="btn btn-primary" onClick={addTask}>Add Task</button>}
                { &&
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task</label>
                        <input type="text" className="form-control" value={task} onChange={e => setTask(e.target.value)}/>
                    </div>
                </form>
                }
                <div className="row">
                    <div className="col-sm">
                        To do
                    </div>
                    <div className="col-sm">
                        In progress
                    </div>
                    <div className="col-sm">
                        Review
                    </div>
                    <div className="col-sm">
                        Done
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;