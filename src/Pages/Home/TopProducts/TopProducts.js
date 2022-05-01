import React from 'react';

const TopProducts = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary mt-5 mb-5 '>Top Selling Products</h2>

            <div>
                <div className="card w-50 mb-3">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet error voluptatibus harum fugiat ipsum pariatur assumenda sed ab voluptates qui!</p>
                </div>
                <div className="card w-50">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet error voluptatibus harum fugiat ipsum pariatur assumenda sed ab voluptates qui!</p>
                </div>
                <div className="card w-50">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet error voluptatibus harum fugiat ipsum pariatur assumenda sed ab voluptates qui!</p>
                </div>
                <div className="card w-50">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet error voluptatibus harum fugiat ipsum pariatur assumenda sed ab voluptates qui!</p>
                </div>
            </div>
        </div>
    );
};

export default TopProducts;