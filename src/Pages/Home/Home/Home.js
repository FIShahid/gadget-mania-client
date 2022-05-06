import React from 'react';
import { Link } from 'react-router-dom';
import ManageInventory from '../../ManageInventory/ManageInventory';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Seller from '../Seller/Seller';
import TopProducts from '../TopProducts/TopProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Link to='/manageInventory' element={<ManageInventory></ManageInventory>} > <button className='btn btn-info w-50 mx-5 mt-5'>Manage Inventory</button></Link>
            <Seller></Seller>
            <TopProducts></TopProducts>
        </div>
    );
};

export default Home;