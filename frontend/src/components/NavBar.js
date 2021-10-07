import {NavLink} from "react-router-dom";
import "./NavBar.css";
import styled from "styled-components/macro";

function NavBar() {
	return (
		<NavLayout>
			<NavLink to="/" className="Nav-Bar">
				All ToDos
			</NavLink>

			<NavLink to="/open" className="Nav-Bar">
				Open
			</NavLink>

			<NavLink to="/inprogress" className="Nav-Bar">
				In Progress
			</NavLink>

			<NavLink to="/done" className="Nav-Bar">
				Done
			</NavLink>
		</NavLayout>
	);
}
export default NavBar;

const NavLayout = styled.div`
	display: flex;
	gap: 15px;
	justify-content: center;
	height: fit-content;
`;
