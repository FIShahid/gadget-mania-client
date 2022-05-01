import React from 'react';
import seller from '../../../image/seller/seller.jpg'

const Seller = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5  mb-5'>Our Selling Partner</h2>
    <div className=" ">
        <div className=" mx-auto">
        <div className='card '>
                <img className='w-25' src={seller} alt="" />
                <p>Name: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, cupiditate.</p>
            </div>
            <div className='card '>
                <img className='w-25' src={seller} alt="" />
                <p>Name: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, cupiditate.</p>
            </div>
            <div className='card'>
                <img className='w-25' src={seller} alt="" />
                <p>Name: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, cupiditate.</p>
            </div>
            <div className='card '>
                <img className='w-25' src={seller} alt="" />
                <p>Name: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, cupiditate.</p>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Seller;