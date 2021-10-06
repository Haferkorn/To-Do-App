import {useParams} from "react-router-dom";

function Details() {
    const {id} = useParams()
    console.log("Test")

    return (
        <div>
            <h3>Details Page</h3>
            <p>Die id des Todos ist: {id}</p>
        </div>

    );

}
export default Details;