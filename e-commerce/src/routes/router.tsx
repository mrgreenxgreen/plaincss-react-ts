import {createBrowserRouter} from "react-router-dom";
import Home from "../view/pages/Home.tsx";
import Product from "../view/pages/Product.tsx";
import SampleOnly from "../view/pages/SampleOnly.tsx";
import SampleReducer from "../services/sampleOnly.tsx";


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
        path:"/cart",
        element:"<h1>cart page </h1>"
    },
    {
        path:"/sample",
        element:<SampleReducer/>
    }
])



export default Router;