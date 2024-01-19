import Products from "../../features/products/Products.tsx";
import CSS from "./Main.module.css"
const Main = () => {
    return (
        <div className={CSS.container}>
            hello
           <Products/>
        </div>
    );
};

export default Main;
