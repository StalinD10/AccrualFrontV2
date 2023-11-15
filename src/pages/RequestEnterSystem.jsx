import FormEnterSystem from "../components/FormEnterSystem";
import { useNavigate, Form, useActionData } from "react-router-dom";
import Errors from "../components/Errors";

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const errors = [];

    if (Object.values(data).includes('')) {
        errors.push('Todos los campos son obligatorios')
    }

    //retornamos datos si hay errores
    if (Object.keys(errors).length) {
        return errors;
    }
}

function RequestEnterSystem() {

    const errors = useActionData();
    const navigate = useNavigate();

    return (
        <div>
          
            <Form method="post">
            
                <FormEnterSystem />
                {errors?.length && errors.map((error, i) => <Errors key={i}>{error}</Errors>)}
                <div className="flex items-center items-center flex-row flex-wrap p-6 ">
             
                    <div className="flex-1 w-64">

                        <a onClick={() => navigate(-1)} className="text-base cursor-pointer font-bold leading-6 p-2 text-sky-600 
                                                hover:text-sky-800 dark:text-gray-300 dark:hover:text-sky-500">
                            <span aria-hidden="true">← </span>Regresar </a>

                    </div>
                   
                    <div className="flex-1 w-32">

                        <input type="submit" className="bg-blue-500 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded dark:bg-sky-800 dark:hover:bg-sky-600" value='Enviar' />

                    </div>
                </div>
               
            </Form>
        </div>
    )
}

export default RequestEnterSystem
