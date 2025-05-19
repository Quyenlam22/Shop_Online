import { useSelector } from "react-redux";
import CartList from "../../components/Cart/CartList";
import "./Cart.scss";

function Cart() {
    const cart = useSelector(state => state.cartReducer);

    return (
        <>
            <div className="cart__title">
                <h2>Cart</h2>
                <button className="cart__delete-button">Delete all items</button>
            </div>

            <div>
                {cart.length > 0 ? (
                    <>
                        <CartList/>
                        <div className="cart__total">
                            Total Price: <span>1000$</span>
                        </div>
                    </>
                ) : (
                    <>
                        Cart is empty
                    </>
                )}
            </div>
        </>
    )
}

export default Cart;