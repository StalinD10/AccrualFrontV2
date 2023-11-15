import FormLogin from "../components/FormLogin"
import { Form, useActionData, Link } from "react-router-dom";
import Errors from "../components/Errors";


export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const errors = [];

    if (Object.values(data).includes('')) {
        errors.push('Todos los campos son obligatorios');
    }

    // Retornamos datos si hay errores
    if (errors.length) {
        return errors;
    }

    return null; // No hay errores
}



function Login() {

    const errors = useActionData();

    return (
        <div>

            <Form method="post">
                {errors?.length && errors.map((error, i) => <Errors key={i}>{error}</Errors>)}
                <FormLogin />

                <div className="w-full  bg-gray-50 flex flex-col sm:justify-center items-center dark:bg-slate-950">
                    <div className="w-full sm:max-w-md">
                        <div className="mx-5" >
                            <input type='submit' className="w-full inline-flex items-center justify-center
                             px-4 py-2 bg-blue-700 dark:hover:bg-blue-800 dark: bg-blue-600 hover:bg-blue-700 cursor-pointer
                             border border-transparent rounded-md font-semibold capitalize text-white " value='Iniciar Sesión' />
                        </div>
                    </div>
                    <p className="py-8  text-center text-base text-gray-500  dark:text-gray-300">
                        No tienes cuenta?{' '}
                        <Link to='/formEnterSystem' className="font-semibold leading-6 text-sky-600 hover:text-sky-500 cursor-pointer dark:text-sky-500 
                        dark:hover:text-sky-600 ">
                            Solicitud de ingreso al sistema
                        </Link>
                    </p>
                </div>
            </Form>

        </div>
    )
}

export default Login
