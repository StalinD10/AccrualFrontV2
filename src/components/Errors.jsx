
function Errors({ children }) {
    return (
        <div className="p-4 mb-4  text-m text-red-800 text-center justify-center bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {children}
        </div>
    )
}

export default Errors
