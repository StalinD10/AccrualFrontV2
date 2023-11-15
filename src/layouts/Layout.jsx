import "../styles.css";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="dark:bg-slate-950 ">
            <div className="w-full">
                <header className="header bg-[#0076bd] border-b-4 border-red-600 dark:bg-none dark:bg-slate-900 ">
                    <div className="text-white text-right flex justify-between py-3">
                        <div className="dark:bg-[url('../src/img/logoUce.png')] dark:bg-no-repeat dark:bg-center dark:bg-contain dark:w-40 dark:h-25">
                        </div>
                        <div className="p-5 my-2">
                            <h1 className="font-bold text-2xl">UNIVERSIDAD CENTRAL DEL ECUADOR</h1>
                            <p className="py-3 text-lg">Sistema de seguimiento a devengamientos de doctorados</p>
                        </div>
                    </div>
                </header>
            </div>
            <Outlet />
            <div className="w-full">
                <footer className="bg-[#0076bd] text-center border-t-4 border-red-600 p-4 dark:bg-slate-900">

                    <div className="md:flex md:justify-between ">
                        <div className="mb-6 ">
                            <a href="https://www.uce.edu.ec/web/ugd" className="flex items-center">
                                <img src="../src/img/uce.png" className="h-14 mr-3" alt="Uce Logo" />
                                <span className="self-center text-2xl font-semibold  text-white">Direccion de Doctorados UCE</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Contactos</h2>
                                <ul className="text-white  font-medium">
                                    <li className="mb-4">
                                        <a href="https://www.uce.edu.ec/web/ddi" className="hover:underline ">Doctorados UCE</a>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                                <ul className="text-white  font-medium">

                                    <li>
                                        <a href="#" className="hover:underline">Términos &amp; Condiciones</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-white-300 sm:mx-auto  lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-white sm:text-center">© 2023 <a href="https://www.uce.edu.ec/web/ddi" className="hover:underline">Doctorados UCE</a>.
                            Todos los derechos reservados.
                        </span>
                        <div className="sm:flex sm:items-center sm:justify-end">
                            <span className="text-sm text-white sm:text-center">
                                Powered by YPS Systems.
                            </span>

                        </div>
                    </div>

                </footer>
            </div>
        </div>
    )
}

export default Layout
