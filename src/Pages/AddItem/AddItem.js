import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `https://intense-dawn-79079.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };

    return (
        <div>
            <h2 className='text-center mt-3 mb-3'>Please add a Product</h2>
             <div className='w-50 mx-auto shadow-lg p-2 bg-success'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 ' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Item Quantity' type="text" {...register("stock")} />
                <input className='mb-2' placeholder='Seller Name' type="text" {...register("seller")} />
                <input className='mb-2' placeholder='email' type="text" {...register("email")} />
                <input type="submit" value="Add Product" className='btn btn-primary' />
            </form>
        </div>
        </div>
    );
};

export default AddItem;