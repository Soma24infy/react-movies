import { genreDTO } from "../Genres/genres.model";
import { movieTheaterDTO } from "../MovieTheatres/movieTheater.model";
import MovieForm from "./MovieForm";

export default function CreateMovie()
{
    const nonSelectedGenres:genreDTO[]=[{id:1,name:'Comedy'},{id:2,name:'Drama'}];
    const nonSelectedMovieTheaters:movieTheaterDTO[]=[{id:1,name:'City Center'},{id:2,name:'Villagio'}];
    return(
        <>
        <h3>Create Movie</h3>
        <MovieForm model={{title:'', inTheaters: false, trailer:'' }}
        onSubmit={values=>console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={[]}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={[]}
        selectedActors={[]}
        />
        </>
    )
}