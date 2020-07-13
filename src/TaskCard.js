import React from 'react';
import './App.css';



function TaskCard(props) {

    const left = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-short" fill="currentColor"
                       xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
        <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
    </svg>)

    const right = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
        </svg>)

  return (
    <div>
        {props.task.name}
        <span onClick={() => props.changeStatus({id: props.task.id, direction: 'left'})}>
        {left}
        </span>
        <span onClick={() => props.changeStatus({id: props.task.id, direction: 'right'})}>
        {right}
        </span>
    </div>
  );
}

export default TaskCard;
