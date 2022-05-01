import React from 'react';

const Product = ({product}) => {
    const {name ,img ,description ,seller ,stock ,price} = product;
    return (
        <div className='shadow-lg p-2'>
            <img className='w-25' src={img} alt="" />
            <h5>Product Name:{name}</h5>
            <p>Description:{description}</p>
            <h6>Seller:{seller}</h6>
            <p>Stock:{stock}</p>
            <h6>Price:{price}</h6>
            <button className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Product;