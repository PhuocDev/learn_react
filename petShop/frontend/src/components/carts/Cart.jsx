import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    
    const { myCart,addToCart, total, setTotal} = useContext(CartContext);

    const handleCheckout = () => {
        setTotal(0);
        addToCart([{}]);
    }
    const handleRemove = (props) => {
        const {id, price} = props;
        console.log('Deleted dogs id: ' +id)
        // addToCart();
        const newList = myCart.filter((item) => item.id !== id);
        addToCart(newList);
        setTotal((total) => (total -= Number(price)));
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
                            <div className="cart-item" key={item.id}>
                                <img src={item.imageUrl} className="cart-item-img" alt=""/>
                                {item.name} : {item.price}$
                                <button className="cart-remove-item"
                                    onClick={() => handleRemove(item)}
                                    >
                                    Delete
                                </button>
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