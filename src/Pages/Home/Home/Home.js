import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Seller from '../Seller/Seller';
import TopProducts from '../TopProducts/TopProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Seller></Seller>
            <TopProducts></TopProducts>
        </div>
    );
};

export default Home;