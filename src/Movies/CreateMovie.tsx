import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { urlMovies } from '../endpoints';
import { genreDTO } from '../Genres/genres.model';
import { movieTheaterDTO } from '../MovieTheatres/movieTheater.model';
import DisplayErrors from '../Utils/DisplayErrors';
import Loading from '../Utils/Loading';


import MovieForm from './MovieForm';
import { movieCreationDTO, moviesPostGetDTO } from './movies.model';

export default function CreateMovie() {

    const [nonSelectedGenres, setNonSelectedGenres] = useState<genreDTO[]>([]);
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] =
        useState<movieTheaterDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState<string[]>([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`${urlMovies}/postget`)
            .then((response: AxiosResponse<moviesPostGetDTO>) => {
                setNonSelectedGenres(response.data.genres);
                setNonSelectedMovieTheaters(response.data.movieTheaters);
                setLoading(false);
            })
    }, [])

    async function create(movie: movieCreationDTO){
        try{
            const formData = convertMovieToFormData(movie);
            const response = await axios({
                method: 'post',
                url: urlMovies,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            })

            history.push(`/movie/${response.data}`);

        } catch(error:any){
            setErrors(error.response.data);
        }
    }

    return (
        <>
            <h3>Create Movie</h3>
            <DisplayErrors errors={errors} />
            {loading ? <Loading /> :
                <MovieForm model={{ title: '', inTheaters: false, trailer: '' }}
                    onSubmit={ async values => await create(values)}
                    nonSelectedGenres={nonSelectedGenres}
                    selectedGenres={[]}

                    nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                    selectedMovieTheaters={[]}
                    selectedActors={[]}
                />}
        </>
    )
}

function convertMovieToFormData(movie: movieCreationDTO) {
    throw new Error('Function not implemented.');
}
