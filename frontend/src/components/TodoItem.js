import styled from "styled-components/macro";

export default function TodoItem({todo, onAdvance, onDelete}) {


    return (
        <Wrapper status={todo.status}>
            <h3>{todo.description}</h3>
            {onAdvance && <button onClick={() => onAdvance(todo)}>Advance</button>}
            {onDelete && <button onClick={() => onDelete(todo.id)}>Delete</button>}
        </Wrapper>
    )
};


const Wrapper = styled.div`
  border: 3px solid #F9C784;
  
  border-radius: 10px;
  padding: 12px;
  margin: 12px;
  

  background-color: ${props => props.status==="OPEN"? "#FB5012" :
                                props.status==="IN_PROGRESS"?"#83C9F4": 
                                        "#03FCBA"};
`