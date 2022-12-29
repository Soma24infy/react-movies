import CreateActor from "./Actors/CreateActor";
import EditActor from "./Actors/EditActor";
import IndexActors from "./Actors/IndexActors";
import CreateGenre from "./Genres/CreateGenres";
import EditGenres from "./Genres/EditGenres";
import IndexGenres from "./Genres/IndexGenres";
import CreateMovie from "./Movies/CreateMovie";
import EditMovie from "./Movies/EditMovie";
import FilterMovies from "./Movies/FilterMovies";
import LandingPage from "./Movies/LandingPage";
import CreateMovieTheater from "./MovieTheatres/CreateMovieTheater";
import EditMovieTheater from "./MovieTheatres/EditMovieTheater";
import IndexMovieTheaters from "./MovieTheatres/IndexMovieTheatres";
import RedirectToLandingPage from "./Utils/RedirectToLandingPage";

const routes= [
    {path: '/genres',component:IndexGenres, exact:true},
    {path: '/genres/create',component:CreateGenre},
    {path: '/genres/edit/:id(\\d+)',component:EditGenres},

    {path: '/actors',component:IndexActors, exact:true},
    {path: '/actors/create',component:CreateActor},
    {path: '/actors/edit/:id(\\d+)',component:EditActor},

    {path: '/movietheaters',component:IndexMovieTheaters, exact:true},
    {path: '/movietheater/create',component:CreateMovieTheater},
    {path: '/movietheater/edit/:id(\\d+)',component:EditMovieTheater},

    {path: '/movies/create',component:CreateMovie},
    {path: '/movies/edit/:id(\\d+)',component:EditMovie},
    {path: '/movies/filter',component:FilterMovies},

    {path: '/', component:LandingPage , exact:true},
    {path:'*', component:RedirectToLandingPage}
]

export default routes;