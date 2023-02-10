import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const {myCart} = useContext(CartContext);
    return ( 
        <>
        <section className="cart-container">
            <div className="cart-header">
                Checkout
            </div>
            <div className="cart-items">
                {
                    // eslint-disable-next-line array-callback-return
                    myCart.map((item) => {
                        <div className="cart-items" >
                            <img src={item.imageUrl} alt="" />
                            {item.name} : {item.price}
                        </div> 
                    })
                }
            </div>
        </section>
        </>
     );
}
 
export default Cart;