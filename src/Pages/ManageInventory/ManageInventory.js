import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

const ManageInventory = () => {
    const [products, setProducts] = useProduct()

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
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div>
            <h3 className='text-center mt-3 mb-3'>Manage Inventory</h3>
            {
                products.map(product => <div key={product._id}>
                    <Table striped bordered hover responsive variant='dark' className='container   ' >

                       
                        <tbody className='' >
                            <tr className=''>
                                <td className='fw-bold d-flex justify-content-center'>{product.name}</td>
                                <td className=' d-flex justify-content-center'><img style={{height:'80px'}} src={product.img} alt="" /></td>

                                <td className='fw-bold d-flex justify-content-center'><span>Available Stock: </span>{product.stock}</td>
                                <td className='text-center m-auto'> <button onClick={() => handleDelete(product._id)} className='btn btn-danger px-2'>Delete</button>
                                </td>
                            </tr>


                        </tbody>
                    </Table>
                
                </div>)
            }
             <div className='text-center'>
                    <Link to='/addItem' ><button className='btn btn-info w-75 p-3 fw-bold'>Add Item</button> </Link>
                    </div>
        </div>
    );
};

export default ManageInventory;