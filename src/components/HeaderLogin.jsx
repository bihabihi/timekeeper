import { useNavigate } from "react-router-dom";

const HeaderLogin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("token");

    navigate("/login")
  }
  return (
    <div className="flex justify-between items-center">
        <div>logo</div>
        <button onClick={handleLogout} className="px-2 text-white text-s bg-red-500 rounded-full">Logout</button>
    </div>
  )
}

export default HeaderLogin