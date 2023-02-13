import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    
    const {myCart,addToCart, total, setTotal} = useContext(CartContext);

    const handleCheckout = () => {
        setTotal(0);
        addToCart([{}]);
    }

    //hook use navigate
    const navigate = useNavigate();
    const handleGohome = () => {
        navigate("/");
    }
    return ( 
        <>
        <section className="cart-container">
            <div className="cart-header">
                Checkout:
            </div>
            <div className="cart-items">
                {
                    // eslint-disable-next-line array-callback-return
                    myCart.slice(1).map((item) => {
                        return(
                            <div className="cart-item">
                                <img src={item.imageUrl} className="cart-item-img" alt=""/>
                                {item.name} : {item.price}$
                            </div>
                        )
                    })
                }
                <div className="cart-total">Total: {total}$</div>
            </div>
            <button className="cart-checkout" onClick={handleCheckout}>
                Done
            </button>
            <button className="cart-gohome" onClick={handleGohome}>
                GO HOME
            </button>
        </section>
        </>
     );
}
 
export default Cart;