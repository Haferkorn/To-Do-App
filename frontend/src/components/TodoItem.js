import styled from "styled-components/macro";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {useState} from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";



TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    onAdvance: PropTypes.func,
    onDelete: PropTypes.func
}

export default function TodoItem({todo, onAdvance, onDelete}) {
    const history=useHistory()

    const [displayButtons, setdisplaybuttons]=useState(false);

    const handlestatus=()=>{
        setdisplaybuttons(!displayButtons);
    }


    return (
        <Wrapper status={todo.status}>
            <h3>{todo.description}</h3>
            {displayButtons?
                <div>
                 {onAdvance && <UpdateButton onClick={() => onAdvance(todo)}>Advance</UpdateButton>}
                 {onDelete && <DeleteButton onClick={() => onDelete(todo.id)}>Delete</DeleteButton>}
                <UpdateButton onClick={() => history.push(`/todo/${todo.id}`)}>Details</UpdateButton>
                </div>: <UpdateButton onClick={()=>handlestatus()}><Icon size={20}/> </UpdateButton>
            }
        </Wrapper>
    )
};


const Wrapper = styled.div`
  border: 3px solid #F9C784;
  
  border-radius: 10px;
  padding: 12px;
  margin: 12px;
  background-color: ${props => props.status==="OPEN"? "#F97068" :
                                props.status==="IN_PROGRESS"?"#83C9F4": 
                                        "#03FCBA"};
`
const UpdateButton =styled.button`
  gap: 5px;

  box-shadow: 0px 10px 14px -7px #276873;
  background-color: #A29C9B;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  padding:8px 8px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  cursor: pointer;
  &:hover {
    background-color: #F3CA40;

`
const DeleteButton =styled.button`
  box-shadow: 0px 10px 14px -7px #276873;
  background-color: #A29C9B;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 10px;
  padding:8px 8px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  cursor: pointer;
  &:hover {
    background-color: #96031A;
    
`
const Icon =styled(FaRegArrowAltCircleRight)`
    width: 100px;
`