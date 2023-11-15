import { useState, useEffect } from "react"
import { getFaculty } from "../js/FormEnterSystem";

const FormEnterSystem = ({}) => {

    //Hooks usage
    const [acccrualModality, setAccrualModality] = useState();
    const [faculties, setFaculties] = useState([]);


    //Get Faculties API
    useEffect(() => {
        try {
            const faculty = getFaculty();
            faculty.then(response => {
                setFaculties(response);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div>
            <div className="p-6 bg-white-100 flex items-center justify-center">
                <div className=" container max-w-screen-lg mx-auto">
                    <div >
                        <h2 className="mb-12  text-center text-4xl font-bold text-sky-700 dark:text-white">Formulario de ingreso al sistema </h2>


                        <div className="bg-white rounded shadow-lg  dark:bg-slate-950">
                            <div className="grid gap-2 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-sky-600 mx-4">
                                    <p className="font-medium text-xl dark:text-sky-500">Datos Generales</p>
                                    <p className='text-base text-gray-600 dark:text-gray-300'>Ingrese sus datos personales</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-5 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-2">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="identification" >Cédula:</label>
                                            <input type="text" name="identification" id="identification" className="py-2 px-3 border text-gray-600 border-gray-300
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]"  />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="names">Nombres:</label>
                                            <input type="text" name="names" id="names" className="py-2 px-3 border border-gray-300 text-gray-600
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]"  />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="lastNames">Apellidos:</label>
                                            <input type="text" name="lastNames" id="lastNames" className="py-2 px-3 text-gray-600 border border-gray-300
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]"  />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="email">Correo Institucional:</label>
                                            <input type="email" name="email" id="email" placeholder='correo@uce.edu.ec' className="py-2 px-3 text-gray-600 border border-gray-300
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]"  />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="faculty">Facultad:</label>
                                            <select id="faculty" name='faculty' className="py-2 px-3 text-gray-600 border border-gray-300
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]">
                                                <option disabled value=''>*** Seleccione ***</option>
                                                {faculties.map(faculty => (
                                                    <option key={faculty.idFaculty} value={faculty.idFaculty}>
                                                        {faculty.facultyName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="acccrualModality">Modalidad de devengamiento:</label>
                                            <select id="acccrualModality" name='acccrualModality' className="py-2 px-3 text-gray-600 border border-gray-300
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900" onChange={(e) => setAccrualModality(e.target.value)}>
                                                <option value=''>*** Seleccione ***</option>
                                                <option value="Tiempo de devengamiento">Tiempo de devengamiento</option>
                                                <option value="Medio tiempo (combinado)">Medio tiempo (combinado)</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="docentCategory">Categoría del Docente:</label>
                                            <select id="docentCategory" name='docentCategory' className="py-2 px-3 text-gray-600 border border-gray-300
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900">
                                                <option value=''>*** Seleccione ***</option>
                                                <option value="Auxiliar 1">Auxiliar 1</option>
                                                <option value="Auxiliar 2">Auxiliar 2</option>
                                                <option value="Agregado 1">Agregado 1</option>
                                                <option value="Agregado 2">Agregado 2</option>
                                                <option value="Agregado 3">Agregado 3</option>
                                                <option value="Principal">Principal</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <hr className="w-58 h-1 mx-auto my-3 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-600 " />

                            <div className="grid gap-2 gap-y-3 py-3 my-8 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-sky-600 mx-4">
                                    <p className="font-medium text-xl dark:text-sky-500">Datos de devengamiento</p>
                                    <p className='text-base text-gray-600 dark:text-gray-300'>Ingrese su información de devengamiento</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-5 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-4">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="tesisLink" >Enlace de tesis:</label>
                                            <input type="url" name="tesisLink" id="tesisLink" placeholder="https://google.com" className="py-2 px-3 border text-gray-600 border-gray-300
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]"  />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="tesisReadingDate">Fecha de lectura de tesis:</label>
                                            <input type="date" name="tesisReadingDate" id="tesisReadingDate" className="py-2 px-3 border border-gray-300 text-gray-600
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]"  />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="refundDate">Fecha de reintegro:</label>
                                            <input type="date" name="refundDate" id="refundDate" className="py-2 px-3 border border-gray-300 text-gray-600
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]"  />
                                        </div>
                                        <div className="md:col-span-3">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="accrualTime">Tiempo de devengamiento (Meses):</label>
                                            <input type="number" name="accrualTime" id="accrualTime" className="py-2 px-3 text-gray-600 border border-gray-300
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]"  />
                                        </div>
                                        <div className="md:col-span-3">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="contractUrl">Enlace de contrato o adenda:</label>
                                            <input type="url" name="contractUrl" id="contractUrl" placeholder='https://google.com' className="py-2 px-3 text-gray-600 border border-gray-300
                                     focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                    rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                    dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]"  />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <hr className="w-58 h-1 mx-auto my-3 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-600" />

                            <div className="grid gap-2 gap-y-3 py-3 my-8 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-sky-600 mx-4">
                                    <p className="font-medium text-xl dark:text-sky-500">Redes</p>
                                    <p className='text-base text-gray-600 dark:text-gray-300'>Ingrese su información acerca de sus redes</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-5 text-sm grid-cols-1 md:grid-cols-5">

                                        <div className="md:col-span-2">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="rediCedia">REDI/CEDIA</label>
                                            <select id="rediCedia" name='rediCedia' className="py-2 px-3 text-gray-600 border border-gray-300
                                                focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                                rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                                dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]">
                                                <option value=''>*** Seleccione ***</option>
                                                <option value="1">Si</option>
                                                <option value="0">No</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-3">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="senescytInvestigation">Sistema de Investigadores Nacionales de Senescyt</label>
                                            <select id="senescytInvestigation" name='senescytInvestigation' className="py-2 px-3 text-gray-600 border border-gray-300
                                                focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                                rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                                dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]">
                                                <option value=''>*** Seleccione ***</option>
                                                <option value="1">Si</option>
                                                <option value="0">No</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-4">
                                            <label className="block text-base font-medium leading-6 text-gray-600 dark:text-gray-300" htmlFor="orciCode" >Código ORCID:</label>
                                            <input type="text" name="orciCode" id="orciCode" placeholder="https://orcid.org/1111-2222-3333-4444" className="py-2 px-3 border 
                                            text-gray-600 border-gray-300
                                            focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                                            rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                                            dark:text-gray-300 dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]"  />
                                        </div>



                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormEnterSystem
