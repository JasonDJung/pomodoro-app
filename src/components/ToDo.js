import React from "react"

export default function ToDo(props) {
    return (
        <li className="todo stack-small">
          <div className="c-cb">
            <input id={props.id} type="checkbox" defaultChecked={props.completed}
             onChange = {() => props.toggleTaskCompleted(props.id)}
             />
            <label className="todo-label" htmlFor={props.id}>
              {props.task}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">{props.task}</span>
            </button>
            <button type="button" className="btn btn__danger" onClick={() => props.deleteTask(props.id)}>
              Delete <span className="visually-hidden">{props.task}</span>
            </button>
          </div>
        </li>
    );
}