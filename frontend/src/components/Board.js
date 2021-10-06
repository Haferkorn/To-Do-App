import styled from "styled-components/macro";
import TodoItem from "./TodoItem";

export default function Board({title,filter, todos, onAdvance, onDelete}) {

    const todoItems = todos.filter(todo => todo.status === filter)

    //const openTodos = todos.filter(todo => todo.status === "OPEN")
    //const inProgressTodos = todos.filter(todo => todo.status === "IN_PROGRESS")
    //const doneTodos = todos.filter(todo => todo.status === "DONE")


    return (
        <section>
            <h2>{title}</h2>
            <List>
                {todoItems.map(todo => {
                    return (
                       <li key={todo.id}>
                            <TodoItem
                                todo={todo}
                                onAdvance={onAdvance}
                                onDelete={onDelete}
                            />
                        </li>
                    )
                })}
            </List>
        </section>
    )
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`