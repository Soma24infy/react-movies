import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater()
{
    return(
        <>
        <h3>Edit Movie Theater</h3>
        <MovieTheaterForm
        model={{name:'City Center', latitude:25.318311806796817, longitude:51.50445556522756}}
        onSubmit={values=>console.log(values)}
        />
        </>
    )
}