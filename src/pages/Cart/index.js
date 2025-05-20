import { useDispatch, useSelector } from "react-redux";
import CartList from "../../components/Cart/CartList";
import "./Cart.scss";
import { deleteAllItem } from "../../actions/cart";

function Cart() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    const total = cart.reduce((sum, item) => {
        const priceNew = ((item.info.price*(100 - item.info.discountPercentage))/100);
        return sum + priceNew*item.quantity;        
    }, 0)

    return (
        <>
            <div className="cart__title">
                <h2>Cart</h2>
                <button className="cart__delete-button" onClick={() => dispatch(deleteAllItem())}>Delete all items</button>
            </div>

            <div>
                {cart.length > 0 ? (
                    <>
                        <CartList/>
                        <div className="cart__total">
                            Total Price: <span>{total.toFixed(2)}$</span>
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