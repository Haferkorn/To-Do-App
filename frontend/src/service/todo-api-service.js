import axios from "axios";
/*
export const getTodos = () => {
    return fetch("/api/todo")
        .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("fetch todos failed")
            }
        )
}
*/
export const getTodos = () => {
	return axios.get("/api/todo").then((response) => response.data);
};

export const getTodosByID = (id) => {
	return axios.get("/api/todo/" + id).then((response) => response.data);
};
/*
export const postTodo = (description) => {
    return fetch('/api/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({description, status: "OPEN"}),
    }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("fetch todos failed")
        }
    )
}
*/
export const postTodo = (description) => {
	const todo = {description, status: "OPEN"};
	return axios.post("/api/todo", todo).then((response) => response.data);
};

export const putTodo = (todo) => {
	return axios
		.put(`/api/todo/${todo.id}`, todo)
		.then((response) => response.data);
};
/*
export const putTodo = (todo) => {
    return fetch(`/api/todo/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("update todo failed")
        }
    )
}
*/
export const deleteTodo = (id) => {
	return axios.delete(`/api/todo/${id}`);
};

/*
export const deleteTodo = (id) => {
    return fetch(`/api/todo/${id}`, {
        method: 'DELETE',
    })
}*/
