import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h4>This are products: {products.length}</h4>
            {
                products.map(product=> <Product
                key={product.id}
                product={product}
                
                ></Product>)
            }
        </div>
    );
};

export default Products;