import { actorMovieDTO } from "../Actors/actors.model";
import { genreDTO } from "../Genres/genres.model";
import { movieTheaterDTO } from "../MovieTheatres/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie()
{
    const nonSelectedGenres:genreDTO[]=[{id:2,name:'Drama'}];
    const selectedGenres:genreDTO[]=[{id:1,name:'Comedy'}];
    const nonSelectedMovieTheaters:movieTheaterDTO[]=[{id:2,name:'City Center'}];
    const selectedMovieTheaters:movieTheaterDTO[]=[{id:1,name:'Villagio'}];
    const selectedActors:actorMovieDTO[]=[{
        id:1, name: 'Brad Pitt',character:'', picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg'
    }];
    return(
        <>
        <h3>Edit Movie</h3>
        <MovieForm model={{title:'Toy Story', inTheaters: true, trailer:'url', releaseDate: new Date('2019-01-01T00:00:00')}}
        onSubmit={values=>console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={selectedGenres}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={selectedMovieTheaters}
        selectedActors={selectedActors}
        />
        </>
    )
}