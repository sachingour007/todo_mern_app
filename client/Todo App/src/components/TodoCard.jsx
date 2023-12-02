import React from "react";
import '../app.css';
import { Link } from "react-router-dom";

const TodoCard = ({ data, handlerDelete }) => {
    const { _id, title, description } = data;

    return (
        <li className="todo-card-li">
            <div className="todo-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="todo-card-button">
                <Link to={`/todo-edit/${_id}`}><button>Edit</button></Link>
                <button onClick={() => handlerDelete(_id)}  >Delete</button>
            </div>

        </li>
    )
}

export default TodoCard