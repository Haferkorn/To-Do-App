import Board from "./Board";
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";

BoardRender.propTypes={
    todos: PropTypes.array.isRequired,
    onAdvance: PropTypes.func,
    onDelete: PropTypes.func
}

export default function BoardRender({todos, onAdvance, onDelete}) {

    const {statusSlug} = useParams()

    console.log(statusSlug)

    const slugtoFilter={
        "open": "OPEN",
        "inprogress":"IN_PROGRESS",
        "done": "DONE"
    }

    const slugtoTitle={
        "open": "Open",
        "inprogress":"In Progress",
        "done": "Done"
    }

    const filteredTodos = todos.filter(todo => todo.status === slugtoFilter[statusSlug])
    const title = slugtoTitle[statusSlug]
    return (
        <Board
            title={title}
            todos={filteredTodos}
            onAdvance={onAdvance}
            onDelete={onDelete}

        />
    )
};