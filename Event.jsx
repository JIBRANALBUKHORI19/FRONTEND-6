import { useNavigate } from "react-router-dom";

function Event() {
    const navigate = useNavigate();
    return ( 
        <>
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage:"url('https://i.pinimg.com/736x/d9/48/28/d94828ee995f99d1423dc8fdd09f7d19.jpg')"}}>
            <div className="text-center bg-white bg-opacity-75 p-10 rounded-li shadow-lg">
                <h1 className="text-4xl font-bold mb-4">SELAMAT DATANG</h1>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
             onClick={() => navigate("/")}> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
             BACK
             </span>
            </button>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
             onClick={() => navigate("/EvenHandling")}> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            MASUK
             </span>
        </button>
        </div> 
        </div>
        </>
     );
}

export default Event;