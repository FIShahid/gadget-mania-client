import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>


            <h2 className='text-center text-primary'> Available Products</h2>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}

                    ></Product>)
                }


            </div>
        </div>
    );
};

export default Products;