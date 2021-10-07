import {useParams} from "react-router-dom";
import styled from "styled-components/macro";

import useTodo from "../hooks/useTodo";



function Details() {
    const {id} = useParams()

    const {oneTodo}=useTodo(id);

    return (
        <Wrapper>
            <h2>Details Page</h2>
            <h3>{oneTodo.description}</h3>
            <h3>{oneTodo.status}</h3>
            <p>Die id des Todos ist: {id}</p>

        </Wrapper>

    );

}
export default Details;

const Wrapper =styled.div`
  margin: 40px;
  border: 1px solid black;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`
