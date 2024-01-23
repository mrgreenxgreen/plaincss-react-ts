import Products from "../../features/products/Products.tsx";
import CSS from "./Main.module.css"
import Cart from "../../features/cart/Cart.tsx";
const Main = () => {
    return (
        <div className={CSS.container}>
            hello
           <Products/>
        </div>
    );
};

export default Main;
