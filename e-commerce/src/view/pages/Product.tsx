import Header from "../layouts/header/Header.tsx";
import ProductDetails from "../features/product-details/ProductDetails.tsx";
import Cart from "../features/cart/Cart.tsx";

const Product = () => {
    const handleCart = ()=>{

    }
    return (
        <>

        <div>
           <Header/>
            <Cart/>
            <ProductDetails onClick={handleCart}/>
        </div>
        </>
    );
};

export default Product;
