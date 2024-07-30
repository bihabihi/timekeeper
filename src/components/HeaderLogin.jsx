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
            <img className="ml-4 w-20 h-auto" src="/timekeeper.png" alt="image description"></img>
        </div>
        <button onClick={handleLogout} className="px-2 text-white text-s bg-red-500 rounded-full">Logout</button>
    </div>
  )
}

export default HeaderLogin