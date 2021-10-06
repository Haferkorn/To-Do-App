import {Link, NavLink} from "react-router-dom";
import "./NavBar.css"
import styled from "styled-components/macro";

function NavBar(){
    return(
        <NavLayout>

                    <NavLink to="/">All ToDos</NavLink>

                    <NavLink to="/open">Open</NavLink>

                    <NavLink to="/inprogress">In Progress</NavLink>

                    <NavLink to="/done">Done</NavLink>

        </NavLayout>
    );
} export default NavBar

const NavLayout = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  height: fit-content;
  
`

