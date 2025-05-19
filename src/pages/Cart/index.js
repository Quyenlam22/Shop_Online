import { useSelector } from "react-redux";

function Cart() {
    const cart = useSelector(state => state.cartReducer);

    return (
        <>

        </>
    )
}

export default Cart;