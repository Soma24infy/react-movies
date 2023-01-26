import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies.model";
import MoviesList from "./MoviesList";

export default function LandingPage()
{
    const[movies, setMovies]= useState<landingPageDTO>({});

 useEffect(()=>{
  const timerId = setTimeout(() => {
    setMovies({
      inTheatres:[
        {
        id:1,
        title:'SpiderMan : Far From Home',
        poster:'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg?20190522142735'
      },
      {
        id:2,
        title:'Avtar : Way Of Water',
        poster:'https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg'
      },],
      upcomingReleases:[
        {
          
          id:3,
          title:'Soul',
          poster:'https://upload.wikimedia.org/wikipedia/en/3/39/Soul_%282020_film%29_poster.jpg'
        }       
      ]
    })
  }, 1000);
  return ()=> clearTimeout(timerId);
 });

    return (
        <>
         <h3>In Theatres</h3>
          <MoviesList movies={movies.inTheatres}/>
          <h3>Upcoming Releases</h3>
          <MoviesList movies={movies.upcomingReleases}/>
        </>
    )
}