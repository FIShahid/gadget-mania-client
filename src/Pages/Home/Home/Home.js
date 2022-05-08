import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../Counter/Counter';
import ManageInventory from '../../ManageInventory/ManageInventory';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import TopSelling from '../TopSelling/TopSelling';
import ProductRequest from '../ProductRequest/ProductRequest';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <div className='text-center'>
            <Link to='/manageInventory' element={<ManageInventory></ManageInventory>} > <button className='btn btn-info w-50 mx-5 mt-5'>Manage Inventory</button></Link>
            </div>
            <TopSelling></TopSelling>
            <ProductRequest></ProductRequest>
            <Counter></Counter>
        </div>
    );
};

export default Home;