import React from 'react';

const Product = ({product}) => {
    const {name ,img ,description ,seller ,stock ,price} = product;
    return (
        <div>
            <img className='w-25' src={img} alt="" />
            <h5>Product Name:{name}</h5>
        </div>
    );
};

export default Product;