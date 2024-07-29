import { Link } from "react-router-dom";

const Header = () => {
return (
    <header>
        <Link to ="/">Home</Link>
        <Link to ="/register">Register</Link>
        <Link to ="/login">Login</Link>
        <Link to ="/list">List</Link>
    </header>
  )
}

export default Header;