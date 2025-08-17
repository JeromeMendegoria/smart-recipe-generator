import error from "../../assets/error.png"

const ErrorUI = () => {
    
    return (
        <div className="flex flex-col text-center justify-center items-center">
            <p className="text-red-600 font-[700] text-[1.1rem]">Ooops!</p>
            <div className="w-[50%] my-[20px]">
                <img src={error} alt="error character" />
            </div>
            <h3 className="text-[1.5rem] font-[700] mb-[1rem]">Something went wrong</h3>
            <p className="text-[.8rem] mb-1 text-gray-800">we encountered an error while trying to fetch possible recipe on server</p>
            <p className="text-[.8rem] text-gray-800">please try again later or check you available Ingredients</p>
        </div>
    )
}

export default ErrorUI