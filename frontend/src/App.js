import Header from "./components/Header";
import BoardsOverview from "./components/BoardsOverview";
import NewTodo from "./components/NewTodo";
import NavBar from "./components/NavBar";
import styled from "styled-components/macro";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BoardRender from "./components/BoardRender";
import Details from "./components/Details";
import useTodos from "./hooks/useTodos";



function App() {

    const {todos, addTodo, advanceTodo, removeTodo}=useTodos()

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
