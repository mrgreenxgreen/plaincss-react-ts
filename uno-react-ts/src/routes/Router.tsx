import {createBrowserRouter} from "react-router-dom";
import Home from "../view/pages/home/Home.tsx";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    }
])

export default Router;
