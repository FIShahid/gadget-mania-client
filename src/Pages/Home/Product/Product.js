import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name ,img ,description ,seller ,stock ,price} = product;
    const navigate = useNavigate()
    const navigateToInventory =id =>{
        navigate(  `/inventory/${_id}`)

    }
    return (
        <div className='shadow-lg p-2'>
            <img className='w-25' src={img} alt="" />
            <h5>Product Name:{name}</h5>
            <p>Description:{description}</p>
            <h6>Seller:{seller}</h6>
            <p>Stock:{stock}</p>
            <h6>Price:{price}</h6>
            <button onClick={()=>navigateToInventory(_id)} className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Product;