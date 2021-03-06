import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
//const axios = require('axios');

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            try {
                const url = `https://intense-dawn-79079.herokuapp.com/myItem?email=${email}`
                const { data } = await axiosPrivate.get(url)
                setMyItems(data)
            }
            catch (error) {
                console.log(error.messege);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getItems();
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://intense-dawn-79079.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myItems.filter(service => service._id !== id);
                    setMyItems(remaining);
                })
        }
    }
    return (
        <div>
            <h3 className='text-center mt-3 mb-3' style={{color:'#ef5350'}}>My Item : {myItems.length}</h3>
            {
                myItems.map(product => <div key={product._id}>
                    <Table striped bordered hover responsive className='container   ' >


                    <tbody  >
                            <tr className=''>
                                <td className='fw-bold d-flex justify-content-center text-primary'>Product Name:{product.name}</td>
                                <td className=' d-flex justify-content-center'><img style={{ height: '80px' }} src={product.img} alt="" /></td>


                                <td className='fw-bold d-flex justify-content-center'><span>Available Stock: </span>{product.stock}</td>
                                <td className='d-flex justify-content-center text-success fw-bold'><span>Price</span> $ {product.price}</td>
                                <td className='d-flex justify-content-center text-info fw-bold'><span>Seller</span>: {product.seller}</td>
                                <td className='text-center m-auto '> <button onClick={() => handleDelete(product._id)} className='btn btn-danger px-2'>Delete</button>
                                </td>
                            </tr>


                        </tbody>
                    </Table>



                </div>)
            }
            <div className='text-center'>
                <Link to='/addItem' ><button className='btn btn-info w-50 p-3 fw-bold rounded-pill' style={{ backgroundColor: '#66bb6a' }}>Add Item</button> </Link>
                </div>
        </div>
    );
};

export default MyItem;