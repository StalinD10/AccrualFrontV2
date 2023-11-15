function FormLogin() {
      
    return (
        <div>
            <div className="w-full py-4  bg-gray-50 flex flex-col sm:justify-center items-center dark:bg-slate-950">
                <div className="w-full sm:max-w-md p-5 mx-auto">
                    <h2 className="mb-12 text-center text-4xl font-bold text-sky-700  dark:text-white">Iniciar Sesión</h2>
                  
                        <div className="mb-4">
                            <label className="block text-base font-medium leading-6 text-gray-700 dark:text-gray-300" htmlFor="email">Correo Institucional:</label>
                            <input id="email" type="text" name="email" placeholder="correo@uce.edu.ec" className="py-2 px-3 border border-gray-300
                             focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 
                             rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                             dark:text-white dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-base font-medium leading-6 text-gray-700 dark:text-gray-300" htmlFor="password">Contraseña:</label>
                            <input id="password" type="password" placeholder="************" name="password" className="py-2 px-3 
                            border border-gray-300 focus:border-sky-300 focus:outline-none focus:ring 
                            focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:[color-scheme:dark]" />
                        </div>

                </div>
            </div>
        </div>
    )
}

export default FormLogin
