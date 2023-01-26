import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlActors } from "../endpoints";
import DisplayErrors from "../Utils/DisplayErrors";
import { convertActorToFormData } from "../Utils/formDataUtils";
import ActorForm from "./ActorForm";
import { actorCreationDTO } from "./actors.model";

export default function CreateActor()
{
    const history = useHistory();
   const[errors, setErrors]= useState<string[]>([]);

   async function create(actor:actorCreationDTO){
    try{
        const formData=convertActorToFormData(actor);
        await axios({
            method:'post',
            url:urlActors,
            data:formData,
            headers:{'Content-Type':'multipart/form-data'}

        })
        history.push('/actors');
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
        <h3>Create Actor</h3>
        <DisplayErrors errors={errors}/>
        <ActorForm model={{name:'',dateofBirth:undefined}}
        onSubmit={async values=>await create(values)}/>
        </>
    )
}