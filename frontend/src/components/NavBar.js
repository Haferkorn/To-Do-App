import {Link} from "react-router-dom";
import "./NavBar.css"
import styled from "styled-components/macro";

function NavBar(){
    return(
        <NavLayout>

                    <LinkStyle href="/">All ToDos</LinkStyle>

                    <LinkStyle href="/open">Open</LinkStyle>

                    <LinkStyle href="/inprogress">In Progress</LinkStyle>

                    <LinkStyle href="/done">Done</LinkStyle>

        </NavLayout>
    );
} export default NavBar

const NavLayout = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;
  
`
const LinkStyle =styled.a`
 padding: 5px;
  
`
