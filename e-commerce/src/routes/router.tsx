import {createBrowserRouter} from "react-router-dom";
import Home from "../view/pages/Home.tsx";
import Product from "../view/pages/Product.tsx";
import SampleOnly from "../view/pages/SampleOnly.tsx";
import SampleReducer from "../services/sampleOnly.tsx";
import Cart from "../view/features/cart/Cart.tsx";

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
        element:<Cart/>
    },
    {
        path:"/sample",
        element:<SampleReducer/>
    }
])



export default Router;