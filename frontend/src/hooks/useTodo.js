import {useEffect, useState} from "react";
import {getTodosByID} from "../service/todo-api-service";

export default function useTodo(id) {
	const [oneTodo, setOneTodo] = useState({});

	useEffect(() => {
		getTodosByID(id).then((data) => setOneTodo(data));
	}, [id]);

	return {
		oneTodo,
	};
}
