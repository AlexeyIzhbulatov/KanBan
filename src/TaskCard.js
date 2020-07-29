import React from 'react';
import './App.css';


function TaskCard(props) {


    return (
        <div>
            {props.el.name}
        </div>
    );
}

export default TaskCard;
