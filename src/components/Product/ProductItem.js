import { FaCartShopping } from "react-icons/fa6";

function ProductItem (props) {
    const { item } = props;
    return (
        <>
            <div className="product__item">
                <img className="product__image" src={item.thumbnail} alt={item.title}/>
                <h3 className="product__title">{item.title}</h3>
                <div className="product__price-new">${((item.price*(100 - item.discountPercentage))/100).toFixed(0)}$</div>
                <div className="product__price-old">${item.price}$</div>
                <p className="product__stock">Còn lại: {item.stock} sản phẩm</p>
                <div className="product__discountPercentage">${item.discountPercentage}%</div>
                <div className="cart">
                    <button><FaCartShopping/></button>
                </div>
            </div>
        </>
    )
}

export default ProductItem;