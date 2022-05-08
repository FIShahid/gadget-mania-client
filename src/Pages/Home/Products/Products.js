import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://intense-dawn-79079.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,6)))
    }, [])
    return (
        <div className='container'>


            <h2 className='text-center  mt-5 mb-5' style={{color:'#ef5350'}}> Products In Stock</h2>
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