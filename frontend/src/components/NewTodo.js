import styled from "styled-components/macro";
import {useState} from "react";
import PropTypes from "prop-types";

NewTodo.propTypes = {
	onAdd: PropTypes.func,
};

export default function NewTodo({onAdd}) {
	const [description, setDescription] = useState("");

	const handleClick = (event) => {
		event.preventDefault()
		if(!description){
			return
		}
		onAdd(description);
		setDescription("");
	};

	return (
		<Form onSubmit={handleClick}>
				<InputField
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
				<AddButton>Add</AddButton>
		</Form>
	);
}

const Form = styled.form`
	font-family: "Montserrat", sans-serif;
	display: flex;
	justify-content: center;
	gap: 40px;
	margin-bottom: 18px;
`;
const InputField = styled.input`
	width: 50%;
	padding: 5px;
	font-size: 16px;
	border-width: 1px;
	border-color: #cccccc;
	background-color: #ffffff;
	color: #000000;
	border-style: hidden;
	border-radius: 22px;
	box-shadow: 3px 0px 5px rgba(66, 66, 66, 0.75);
	text-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
`;
const AddButton = styled.button`
	box-shadow: 0px 10px 14px -7px #276873;
	background-color: #585b56;
	border-radius: 8px;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 15px;
	padding: 13px 15px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #3d768a;
	cursor: pointer;
	&:hover {
		background-color: #f3ca40;
	}
`;
