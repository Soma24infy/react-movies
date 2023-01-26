import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlGenres } from "../endpoints";
import DisplayErrors from "../Utils/DisplayErrors";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";

export default function CreateGenre()
{
   const history = useHistory();
   const[errors, setErrors]= useState<string[]>([]);

   async function create(genre:genreCreationDTO){
    try{
        await axios.post(urlGenres,genre);
        history.push('/genres');
    }
    catch(error:any){
      console.error(error.response.data);
        if(error)
        {
          setErrors(error.response.data);
        }
    }
   }
    return(
        <>
        <h3>Create Genre</h3>
        <DisplayErrors errors={errors}/>
          <GenreForm model={{name:''}}
          onSubmit={async (value)=>{
               //when form is posted
               //await new Promise(r=> setTimeout(r,3000));
               //console.log(value);   
               await create(value);         
           }}
          />
        </>
    )
}