import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="p-4">
      <header className='flex justify-between items-center'>
        <div className="flex justify-between items-center">
          <Link to="/">
            <img className="ml-4 w-20 h-auto hover:shadow-lg hover:shadow-gray-300" src="/timekeeper.png" alt="image description"></img>
          </Link>
        </div>
          
        <div className='flex gap-5 py-2 px-4'>
            {/* links */}
            <Link to ="/login" className="hover:underline">Sign In</Link>
            <div className='border-l border-grey-300'></div>
            <Link to ="/register" className="hover:underline">Register</Link>
        </div>
      </header>

      <div className= "flex flex-row justify-between items-center p-10 mt-5">
        <div className="max-w-prose">
          <h1 className="mb-10 font-bold text-5xl">Never miss your skincare expiry date anymore</h1>
          <h2 className=" text-2xl">We'll gladly remind you!</h2>
          <a href="/register">
            <button className="hover:bg-black hover:text-white mt-10 mb-6 leading-10 border-gray-500 border px-5 rounded-full">Get started</button>
          </a>
        </div>
        <div>
          <img className="h-auto max-w-xs ml-10" src="/skincare2.png" alt="image description"></img>
        </div>
      </div>
    </div>
  )
}

export default Home