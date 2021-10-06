import styled from "styled-components/macro";
import TodoItem from "./TodoItem";


export default function Board({title,todos, onAdvance, onDelete}) {

    return (
        <section>
            <Heading>{title}</Heading>
            <List>
                {todos.map(todo => {
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
  font-family: 'Montserrat', sans-serif;
  max-width: 300px;
  list-style: none;
  padding: 0;
`
const Heading =styled.h2`
  font-family: 'Montserrat', sans-serif;
  
`