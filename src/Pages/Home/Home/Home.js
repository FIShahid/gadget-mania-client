import React from 'react';
import Products from '../Products/Products';
import Seller from '../Seller/Seller';
import TopProducts from '../TopProducts/TopProducts';

const Home = () => {
    return (
        <div>
            <Products></Products>
            <Seller></Seller>
            <TopProducts></TopProducts>
        </div>
    );
};

export default Home;