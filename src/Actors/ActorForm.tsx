import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/Textfield";
import Button from "../Utils/Button";
import { actorCreationDTO } from "./actors.model";
import * as Yup from 'yup';
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MarkdownField from "../forms/MarkdownField";

export default function ActorForm(props:actorFormProps)
{
    return(
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name:Yup.string().required('This field is required').firstLetterUpperCase(),
            dateofBirth: Yup.string().nullable().required('This field is required')
        })}>
            {(formikProps)=>(
                <Form>
                    <TextField displayName="Name" field="name"/>
                    <DateField displayName="Date of birth" field="dateofBirth"/>
                    <ImageField displayName="Picture" field="picture" imageURL={props.model.pictureURL}/>
                    <MarkdownField displayName="Biography" field="biography"/>
                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link to="/actors" className="btn btn-secondary">Cancel</Link>
                </Form>

            )}
            
        </Formik>

    )
}

interface actorFormProps
{
    model:actorCreationDTO;
    onSubmit(values:actorCreationDTO , action: FormikHelpers<actorCreationDTO>):void
}