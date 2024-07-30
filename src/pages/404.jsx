const Error404 = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-gray-800">404</h1>
                <h3 className="text-4xl mt-2"> Not found</h3>
                <h5 className="text-lg mt-2">The resource requested could not be found on this server</h5>
            </div>
        </div>
)}

export default Error404;