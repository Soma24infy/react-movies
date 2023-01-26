import { Field, Form, Formik, FormikHelpers } from "formik";
import { Link, useHistory } from "react-router-dom";
import Button from "../Utils/Button";
import * as Yup from 'yup';
import TextField from "../forms/Textfield";
import { genreCreationDTO } from "./genres.model";


export default function GenreForm(props:genreFormProps){
    return(
        <Formik initialValues={props.model}
        onSubmit={props.onSubmit}
       /* {async (value)=>{
            //when form is posted
            await new Promise(r=> setTimeout(r,1));
            console.log(value);            
        }}*/
        validationSchema={Yup.object({
            name:Yup.string().required('This field is required').max(50, 'max length is 50 charachers').firstLetterUpperCase()
        })}
        >
            {(formikProps) =>(
                     <Form>
                     <TextField field="name" displayName="Name"/>
                     <Button disabled={formikProps.isSubmitting}  type='submit'>Save Changes</Button>
                     <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                    </Form> 
            )}
          
        </Formik>     
    )
}

interface genreFormProps{
    model:genreCreationDTO;
    onSubmit(values:genreCreationDTO, action: FormikHelpers<genreCreationDTO>):void;
}