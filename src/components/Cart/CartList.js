import { useSelector } from "react-redux";

function CartList() {
    const cart = useSelector(state => state.cartReducer);

    return (
        <>
            <div className="cart">
                {cart.map(item => (
                    <div className="cart__item" key={item.info.id}>
                        <img className="cart__image" src={item.info.thumbnail} alt={item.info.title}/>
                        <div className="cart__content">
                            <h3>{item.info.title}</h3>
                            <div className="cart__price-new">${((item.info.price*(100 - item.info.discountPercentage))/100).toFixed(0)}$</div>
                            <div className="cart__price-old">${item.info.price}$</div>
                        </div>
                        <div className="cart__quantity">
                            <button>-</button>
                            <input min={1} defaultValue={item.quantity}></input>
                            <button>+</button>
                        </div>
                        <button className="cart__delete-button">Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CartList;