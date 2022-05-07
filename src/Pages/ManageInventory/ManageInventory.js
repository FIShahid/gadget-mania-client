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
                    <Table striped bordered hover responsive>

                       
                        <tbody className=''>
                            <tr>
                                <td className='fw-bold'>{product.name}</td>
                                <td><img style={{height:'60px'}} src={product.img} alt="" /></td>

                                <td className='fw-bold'><span>Available Product: </span>{product.stock}</td>
                                <td> <button onClick={() => handleDelete(product._id)} className='btn btn-danger px-2'>Delete</button> <Link to='/addItem' ><button className='btn btn-info'>Add Item</button> </Link>
                                </td>
                            </tr>


                        </tbody>
                    </Table>




                </div>)
            }
        </div>
    );
};

export default ManageInventory;