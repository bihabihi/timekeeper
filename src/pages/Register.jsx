import { Link } from "react-router-dom"
import { registerUser } from "../api/auth.js";
import { useState } from "react";

const Register = () => {

  const [successMessage, setSuccessMessage]= useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formContent = event.target.elements;
    const username = formContent.username.value;
    const email = formContent.email.value;
    const password = formContent.password.value;

    await registerUser({
      username,
      email,
      password,
    })

    setSuccessMessage("Registration successful! You may now log in")
    event.target.reset();
  }
    return (
        <div className="h-screen grow flex items-center justify-around">
            <div className="flex flex-col">
                <h1 className="mb-10 text-4xl text-center mb-4">Sign Up</h1>
                <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto items-center">
                    <input className="w-96 px-5 py-2 mb-5 border rounded-full border-gray-500" id="username" name="username" placeholder={"John Doe"} />
                    <input className="w-96 px-5 py-2 mb-5 border rounded-full border-gray-500" type="email" id="email" name="email" placeholder={"your@email.com"} />
                    <input className="w-96 px-5 py-2 mb-5 border rounded-full border-gray-500" type="password" id="password" name="password" placeholder="password"/>
                    <a href="">
                      <button type="submit" className="mt-10 mb-6 leading-10 border-gray-500 border px-5 rounded-full bg-black text-white">Register</button>
                    </a>
                    {successMessage && (
                      <div className="mt-5 text-center text-green-500">
                      {successMessage} <br />
                      <Link to="/login" className="underline text-black">Go to Login</Link>
                    </div>
                    )}
                    {!successMessage && (
                      <div className="text-center py-2 text-gray-500">
                      Already have an account? <Link className="underline text-black" to={"/login"}>Sign in!</Link>
                      </div>
                    )}
                </form>
            </div>
        </div>
    )
  }
  
  export default Register