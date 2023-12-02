import React from "react";
import TodoCard from './TodoCard'

import '../app.css'
import axios from "axios";
// import UpdateTodoList from "./UpdateTodoList";

const ShowTodoList = ({ todo }) => {

    const handlerDelete = async (_id) => {
        try {
            axios.delete(`/api/todo/${_id}`);
            
        } catch (err) {
            console.log("Delete call ", err);
        }

    }

    return (
        <section className="show-todo-sec">
            <section>
                <h1>TODO'S</h1>
                <ul>
                    {todo.map((data) => (
                        <TodoCard data={data} key={data._id} handlerDelete={handlerDelete} />
                    ))
                    }
                </ul>

            </section>
        </section>
    )
}

export default ShowTodoList;