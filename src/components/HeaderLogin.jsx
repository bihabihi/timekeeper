import { useNavigate } from "react-router-dom";

const HeaderLogin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("token");

    navigate("/login")
  }
  return (
    <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img className="ml-4 w-20 h-auto hover:shadow-lg hover:shadow-gray-300" src="/timekeeper.png" alt="image description"></img>
          </Link>
        </div>
        <button onClick={handleLogout} className="px-2 text-white text-s bg-red-500 rounded-full">Logout</button>
    </div>
  )
}

export default HeaderLogin