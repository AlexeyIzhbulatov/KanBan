import React from 'react';
import './App.css';
import TaskCard from "./TaskCard";



function ColumnTask(props) {


  return (
    <div>
        {props.tasks.filter(el => el.status === props.status).map(el => <TaskCard task={el} key={el.id} changeStatus={props.changeStatus}/>)}
    </div>
  );
}

export default ColumnTask;