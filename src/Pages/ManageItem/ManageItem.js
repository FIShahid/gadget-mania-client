import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

const ManageItem = () => {
    const [products, setProducts] = useProduct()
    
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
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
            <h3>Manage Item</h3>
            {
                products.map(product=> <div key={product._id}>
                    <h4>{product.name}</h4> <button onClick={()=>handleDelete(product._id)} className='btn btn-danger'>Delete</button>
                    <Link to='/addItem' ><button className='btn btn-info'>Add Item</button> </Link>

                </div>)
            }
        </div>
    );
};

export default ManageItem;