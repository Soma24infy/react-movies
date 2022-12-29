import { Link } from "react-router-dom";

export default function IndexMovieTheaters()
{
    return(
        <>
        <h3>Movie Theatres</h3>
        <Link className="btn btn-primary" to="/movietheater/create">Create Movie Theaters</Link>
        </>
    )
}