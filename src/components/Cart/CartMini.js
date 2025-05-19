import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function CartMini (props) {
    const {navLinkActive} = props;
    const cart = useSelector(state => state.cartReducer);

    const totalQuantity = cart.reduce((sum, item) => item.quantity + sum, 0);

    return (
        <>
            <NavLink to="/cart" className={navLinkActive}>
                Cart ({totalQuantity}) <FaCartShopping  className="menu__icons"/>
            </NavLink>
        </>
    )
}

export default CartMini;