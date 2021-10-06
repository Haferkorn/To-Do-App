import styled from "styled-components/macro";
import Board from "./Board";

export default function BoardsOverview({todos, onAdvance, onDelete}) {

    return (
        <Main>
            <Board title="Open"
                   filter="OPEN"
                   todos={todos}
                   onAdvance={onAdvance}/>
            <Board title="In Progress"
                   filter="IN_PROGRESS"
                   todos={todos}
                   onAdvance={onAdvance}/>
            <Board title="Done"
                   filter="DONE"
                   todos={todos}
                   onDelete={onDelete}
            />
        </Main>
    )
}

const Main = styled.main`
  border: 1px solid black;
  margin-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`

