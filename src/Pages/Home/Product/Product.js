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
            <img className='w-100' src={img} alt="" />
            <h5 className='mt-2'>Product Name: {name}</h5>
            <p ><span className='fw-bold'>Description:</span> {description.slice(0, 200)}+ <span className='fw-semibold'>"...Read More</span></p>
            <h6>Seller:{seller}</h6>
            <p className='fw-bold'>Stock: {stock}</p>
            <h6>Price: $ {price}</h6>
           
            <button onClick={()=>navigateToInventory(_id)} className='btn btn-primary w-75 mx-4 rounded-pill'>Update</button>
        </div>
    );
};

export default Product;