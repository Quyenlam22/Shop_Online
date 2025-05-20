import { useEffect, useState } from "react";
import { getProductList } from "../../services/ProductService";
import "./Product.scss";
import ProductItem from "./ProductItem";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Product () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setProducts(result);
            setLoading(false);
        }

        fetchApi();
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <div className="product__list">
                        {[...Array(30)].map((_, index) => (
                            <div className="product__item" key={index}>
                                <Skeleton className="product__image"/>
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="product__list">
                    {products.map(item => (
                        <ProductItem item={item} key={item.id}/>
                    ))}
                </div>
            )}
        </>
    )
}

export default Product;