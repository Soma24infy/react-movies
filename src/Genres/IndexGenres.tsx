import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import { genreDTO } from "./genres.model";
import GenericList from "../Utils/GenericList";
import Button from "../Utils/Button";
import Pagination from "../Utils/Pagination";
import RecordsPerPageSelect from "../Utils/RecordsPerPageSelect";
import customConfirm from "../Utils/customConfirm";
import IndexEntity from "../Utils/IndexEntity";

export default function IndexGenres()
{
   /* const[genres, setGenres]= useState<genreDTO[]>();
    const[totalAmountOfPages, setTotalAmountOfPages]=useState(0);
    const[recordsPerPage,setRecordsPerPage]=useState(5);
    const[page,setPage]=useState(1);
    //console.log(process.env);
    useEffect(()=>{
        //console.log(process.env);
        loadData();
    },[page,recordsPerPage])

    function loadData()
    {
        axios.get(urlGenres,{
            params:{page,recordsPerPage}
        })
        .then((response:AxiosResponse<genreDTO[]>)=>{
            const totalAmountOfRecords=
                parseInt(response.headers['totalamountofrecords'],10);
                setTotalAmountOfPages(Math.ceil(totalAmountOfRecords/recordsPerPage));
            setGenres(response.data);
            //console.log(response.data);
        })
    }



    async function deleteGenre(id:number){
        try{
            await axios.delete(`${urlGenres}/${id}`);
            loadData();           
        }
        catch(error:any)
        {
            if(error && error.response){
                console.error(error.response.data);
            }
        }
    }*/



  /*  return(
        <>
        <h3>Genres</h3>
        <Link className="btn btn-primary" to="/genres/create">Create Genre</Link>
        <RecordsPerPageSelect onChange={amountOfRecords=>{
            setPage(1);
            setRecordsPerPage(amountOfRecords)
        }} />

        <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages}
        onChange={newPage=>setPage(newPage)} />
        <GenericList list={genres}>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th></th>
                    <th>Name</th>
                    </tr>                    
                </thead>
                <tbody>
                    {genres?.map(genre=>
                    <tr key={genre.id}>
                        <td>
                            <Link className="btn btn-success"
                            to={`/genres/edit/${genre.id}`}>Edit</Link>
                            <Button 
                            onClick={()=>customConfirm(()=> deleteGenre(genre.id))}
                            className="btn btn-danger">Delete</Button>
                        </td>
                        <td>
                            {genre.name}
                        </td>
                    </tr>
                        )}
                </tbody>
               
            </table>

        </GenericList>
        </>
    )*/
    return(
        <>
        <IndexEntity<genreDTO> url={urlGenres} createURL="genres/create" title="Genres"
        entityName="Genre">
            {(genres,buttons)=>
            <>
            <thead>
                    <tr>
                    <th></th>
                    <th>Name</th>
                    </tr>                    
                </thead>
                <tbody>
                    {genres?.map(genre=>
                    <tr key={genre.id}>
                        <td>
                           {buttons(`genres/edit/${genre.id}`,genre.id)}
                        </td>
                        <td>
                            {genre.name}
                        </td>
                    </tr>
                        )}
                </tbody>
            </>
            }
            
        </IndexEntity>
        </>
    )
}