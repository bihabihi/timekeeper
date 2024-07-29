import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../api/auth.js";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formContent = event.target.elements;
        const email = formContent.email.value;
        const password = formContent.password.value;
    
        const data = await loginUser({
          email,
          password,
        })
        
        const token = data.token;

        if (token) {
            window.localStorage.setItem('token', token);
        }
    
        event.target.reset();

        navigate("/list")
    }
    return (
        <div className="h-screen grow flex items-center justify-around">
            <div className="flex flex-col items-center">
             
                    <Link to="/">
                        <img className="mb-20 w-20 h-auto hover:shadow-lg hover:shadow-gray-300" src="/timekeeper.png" alt="image description"></img>
                    </Link>
                
                
                <h1 className="mb-10 text-4xl text-center mb-4">Sign In</h1>
                <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto items-center">
                    <input className="w-96 px-5 py-2 mb-5 border rounded-full border-gray-500" type="email" id="email" name="email" placeholder={"your@email.com"} />
                    <input className="w-96 px-5 py-2 mb-5 border rounded-full border-gray-500" type="password" id="password" name="password" placeholder="password"/>
                      <button type="submit" className="mt-10 mb-6 leading-10 border-gray-500 border px-5 rounded-full bg-black text-white">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet? <Link className="underline text-black" to={"/register"}>Register now!</Link>
                    </div>
                </form>
            </div>
        </div>
    )
  }
  
export default Login