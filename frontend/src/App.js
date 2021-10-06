import Header from "./components/Header";
import BoardsOverview from "./components/BoardsOverview";
import NewTodo from "./components/NewTodo";
import NavBar from "./components/NavBar";
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import {deleteTodo, getTodos, postTodo, putTodo} from "./service/todo-api-service";
import {getNextStatus} from "./service/todo-service";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BoardRender from "./components/BoardRender";
import Details from "./components/Details";



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
                <Route path="/:statusSlug" exact>
                        <BoardRender
                            todos={todos}
                            onAdvance={advanceTodo}
                            onDelete={removeTodo}
                        />
                </Route>
                <Route path="/todo/:id" exact>
                   <Details/>
                </Route>
            </Switch>
            </PageLayout>
        </Router>

    );
}

export default App;

const PageLayout = styled.div`

 

`
