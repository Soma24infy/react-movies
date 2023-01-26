import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { urlGenres } from "../endpoints";
import DisplayErrors from "../Utils/DisplayErrors";
import EditEntity from "../Utils/EditEntity";
import Loading from "../Utils/Loading";
import GenreForm from "./GenreForm";
import { genreCreationDTO, genreDTO } from "./genres.model";

export default function EditGenres()
{
    return (
        <>
        <EditEntity<genreCreationDTO,genreDTO>
            url={urlGenres} entityName="Genres"
            indexURL="/genres">
                {(entity,edit)=>
                <GenreForm model={entity}
                onSubmit={async value=>{
                    await edit(value)
                }}
                    />
                }
            </EditEntity>
        </>
    )
}

/*export default function EditGenres()
{
    const {id}: any = useParams();
    const[genre,setGenre] = useState<genreCreationDTO>();
    const[errors,setErrors] =useState<string[]>([]);
    const history=useHistory();

    useEffect(()=>{
        axios.get(`${urlGenres}/${id}`)
        .then((response:AxiosResponse<genreCreationDTO>)=>{
            setGenre(response.data)
    })
    },[id]);

    async function edit(genreToEdit:genreCreationDTO){
        try{
            await axios.put(`${urlGenres}/${id}`,genreToEdit);
            history.push('/genres');
        }
        catch(error:any)
        {
            if(error && error.response){
                setErrors(error.response.data);
            }
        }
    }

    return(
        <>
        <h3>Edit Genre</h3>
        <DisplayErrors errors={errors}/>
        {genre ? <GenreForm model={genre}
          onSubmit={async (value)=>{
               //when form is posted
               //await new Promise(r=> setTimeout(r,3000));
               //console.log(id);
               //console.log(value);  
               await edit(value);          
           }}
          /> :<Loading />
        }
        
        </>
    )
}*/