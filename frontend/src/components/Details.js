import {useParams} from "react-router-dom";

import {getTodos, getTodosByID} from "../service/todo-api-service";
import {useEffect, useState} from "react";
import TodoItem from "./TodoItem";



function Details() {
    const {id} = useParams()
    const [oneTodo, setOneTodo]=useState({})

    useEffect(()=>{
        getTodosByID(id).then(data => setOneTodo(data))
    },[])


    return (
        <div>
            <h2>Details Page</h2>
            <h3>{oneTodo.description}</h3>
            <h3>{oneTodo.status}</h3>
            <p>Die id des Todos ist: {id}</p>

        </div>

    );

}
export default Details;