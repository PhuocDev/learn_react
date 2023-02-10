import { useState } from "react";

/* eslint-disable react/jsx-no-comment-textnodes */
const DogCard = (props) => {
    const {id, name, breed, description, price, imageUrl} = props;
    const [isAdded, setAdded] = useState(false);
    const handleClick = () => {
        setAdded(true);
    }
    return ( 
        <>
        <section className="dogs">
            <div className="dogs-info">
                <p>{name}</p>
                <p>{breed}</p>
            </div>
            <div className="dogs-img-container">
                <img src={imageUrl} alt="pic" className="dog-img" />
            </div>
            <div className="dogs-desc">{description}</div>
            <div className="dogs-price">{price}$</div>
            {isAdded ? (
                <button disabled className="dogs-btn-disabled" >
                ADDED
                </button>
            ): (
                <button className="dogs-btn" onClick={handleClick}>
                ADD TO CART
                </button>
            )}
        </section>
        </>
     );
}
 
export default DogCard;