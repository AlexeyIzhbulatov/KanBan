import React, {useState} from 'react';
import './App.css';



function ColumnTask(props) {


  return (
    <div>
        {props.tasks.filter(el => el.status === props.status).map(el => el.name)}
    </div>
  );
}

export default ColumnTask;
