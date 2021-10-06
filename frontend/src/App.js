import Header from "./components/Header";
import BoardsOverview from "./components/BoardsOverview";
import NewTodo from "./components/NewTodo";
import NavBar from "./components/NavBar";
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import {deleteTodo, getTodos, postTodo, putTodo} from "./service/todo-api-service";
import {getNextStatus} from "./service/todo-service";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Board from "./components/Board";

function App() {

    const [todos, setTodos] = useState([]);

    const addTodo = (description) => {
        postTodo(description)
            .then(addedTodo => setTodos([...todos, addedTodo]))
    }

    const advanceTodo = (todo) => {
        const newStatus = getNextStatus(todo.status)
        const advancedTodo = {...todo, status: newStatus}
        putTodo(advancedTodo)
            .then(updatedTodo =>
                setTodos(todos.map(item => updatedTodo.id === item.id ? advancedTodo : item)))
    }

    const removeTodo = (id) => {
        deleteTodo(id)
            .then(() => setTodos(todos.filter(todo => todo.id !== id)))
    }


    useEffect(() => {
        getTodos()
            .then(todos => setTodos(todos))
    }, [])

    return (
        <Router>
            <PageLayout>
                <Header/>
                <NavBar/>

            <Switch>
               <Route path="/" exact>

                       <BoardsOverview
                           todos={todos}
                           onAdvance={advanceTodo}
                           onDelete={removeTodo}
                       />
                       <NewTodo onAdd={addTodo}/>

               </Route>
                <Route path="/open">


                        <Board
                            title={"Open"}
                            filter={"OPEN"}
                            todos={todos}
                            onAdvance={advanceTodo}
                            onDelete={removeTodo}
                        />

                </Route>
                <Route path="/inprogress">

                        <Board
                            title={"In Progress"}
                            filter={"IN_PROGRESS"}
                            todos={todos}
                            onAdvance={advanceTodo}
                            onDelete={removeTodo}
                        />

                </Route>
                <Route path="/done">

                        <Board
                            title={"Done"}
                            filter={"DONE"}
                            todos={todos}
                            onAdvance={advanceTodo}
                            onDelete={removeTodo}
                        />

                </Route>

            </Switch>
            </PageLayout>
        </Router>

    );
}

export default App;

const PageLayout = styled.div`

 

`
