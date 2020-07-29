import React, {useState} from 'react';
import './App.css';


function App() {

    const [isOpenTaskForm, setIsOpenTaskForm] = useState(false)
    const [isActivedButtonText, setIsActivedButtonText] = useState(false)
    const [task,setTask] = useState('')

    const openCreateTaskForm = () => {
        setIsOpenTaskForm(true)
    }

    const activatedText = (e) => {
        setIsActivedButtonText(e.targer.value.length > 4)
    }

    const buttonInput = () => {
        console.log(task);
        setTask('')
    }





    return (
        <div>
            <div className="container">
                <h1>Kanban</h1>

                {!isOpenTaskForm &&
                <button type="button" className="btn btn-primary" onClick={openCreateTaskForm}>Create Task</button>}
                {isOpenTaskForm &&
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task</label>
                        <input type="text" className="form-control"  value={task} onChange={activatedText}/>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!isActivedButtonText}>Submit</button>
                </form>
                }

                <div className="row">
                    <div className="col-sm">
                        To do
                    </div>
                    <div className="col-sm">
                        Is progress
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