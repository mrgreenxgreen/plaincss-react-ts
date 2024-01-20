import {createBrowserRouter} from "react-router-dom";
import Home from "./view/pages/Home.tsx";
import Product from "./view/pages/Product.tsx";

const Router = createBrowserRouter([

    {
        path:"/",
        element:"hello"
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/product/:id",
        element:<Product/>
    },
    {

    }
])

export default Router;