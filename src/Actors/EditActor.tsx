import { urlActors } from "../endpoints";
import EditEntity from "../Utils/EditEntity";
import { convertActorToFormData } from "../Utils/formDataUtils";
import ActorForm from "./ActorForm";
import { actorCreationDTO, actorDTO } from "./actors.model";

export default function EditActor()
{
    function transform(actor: actorDTO): actorCreationDTO {
        //console.log(actor);
        return {
            name: actor.name,
            pictureURL: actor.picture,
            biography: actor.biography,
            dateofBirth: new Date(actor.dateofBirth)
        }
       
    }

    return(
        <EditEntity<actorCreationDTO, actorDTO>
            url={urlActors} indexURL="/actors" entityName="Actor"
            transformFormData={convertActorToFormData}
            transform={transform}
            >                              
                {(entity,edit)=>
                <ActorForm
                    model={entity}                    
                    onSubmit={async values=> await edit(values)}
                    />
                }
            </EditEntity>
    )
}