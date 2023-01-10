import React, { useEffect, useState } from 'react';
import './App.css';
import IndividualMovie from './Movies/IndividualMovie';
import { landingPageDTO, movieDTO } from './Movies/movies.model';
import MoviesList from './Movies/MoviesList';
import Menu from './Menu';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import IndexGenres from './Genres/IndexGenres';
import Genres from './Genres/IndexGenres';
import LandingPage from './Movies/LandingPage';
import routes from './route-config';
import configureValidations from './Validations';

configureValidations();

function App() {
 
  
  return (
 
    <BrowserRouter>
    <Menu/>
    <div className="container"> 
    <Switch>    
        {routes.map(route=>
        <Route key={route.path} path={route.path} exact={route.exact}>
          <route.component/>
        </Route>)}
        </Switch> 
    </div>
    </BrowserRouter>
  )
  }
export default App;
