import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddToList from "../pages/list/AddToList.jsx";
import Error404 from "../pages/404.jsx";
import { ViewList } from "../pages/list/ViewList.jsx";

const router = createBrowserRouter ([
    {
      path: "/",
      element: <Home/>,
      errorElement: <Error404/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/list",
      element: <ViewList/>
    },
    {
      path: "/list/addtolist",
      element: <AddToList/>
    }
])

export default router;