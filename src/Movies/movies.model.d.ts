import { actorMovieDTO } from "../Actors/actors.model";

export interface movieDTO
{
    id:number;
    title:string;
    poster:string;
}

export interface movieCreationDTO{
    title:string;
    inTheaters:boolean;
    trailer:string;
    releaseDate?:Date;
    poster?:File;
    posterURL?:string;
    genresIds?:number[];
    movieTheatersIds?:number[];
    actors?:actorMovieDTO[];
}


export interface landingPageDTO
{
    inTheatres?: movieDTO[];
    upcomingReleases?: movieDTO[];
}
export interface moviesPostGetDTO {
    genres: genreDTO[];
    movieTheaters: movieTheaterDTO[];
}

export interface moviePutGetDTO {
    movie: movieDTO;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
    actors: actorMovieDTO[];
}