import { Link } from "react-router-dom"

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn (false)
    }
  }, [])

  return (
    <div className="p-4 w-full h-screen">
      <header className='flex justify-between items-center'>
        <div className="flex justify-between items-center">
          <Link to="/">
            <img className="ml-4 w-20 h-auto hover:shadow-lg hover:shadow-gray-300" src="/timekeeper.png" alt="image description"></img>
          </Link>
        </div>
          
        <div className='flex gap-5 py-2 px-4'>
            {/* links */}
            {/* condition ? (trueCase) : (falseCase) */}

            {!isLoggedIn ? (
              <>
                <Link to ="/login" className="hover:underline">Sign In</Link>
                <div className='border-l border-grey-300'></div>
                <Link to ="/register" className="hover:underline">Register</Link>
              </>
            ) : (
                <Link to="/list" className="hover:underline">Dashboard</Link>
            )}
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
        <div className="hidden md:flex justify-center mt-5 md:mt-0">
          <img className="h-auto max-w-xs mx-4 sm:mx-8 md:mx-10" src="/skincare2.png" alt="image description"></img>
        </div>
      </div>
    </div>
  )
}

export default Home