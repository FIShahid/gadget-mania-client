import React from 'react';
import useProduct from '../../hooks/useProduct';

const ManageInventory = () => {
    const [products, setProducts] = useProduct()
    
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
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
            <h3>Manage Inventory</h3>
            {
                products.map(product=> <div key={product._id}>
                    <h4>{product.name}</h4> <button onClick={()=>handleDelete(product._id)} className='btn btn-danger'>Delete</button>

                </div>)
            }
        </div>
    );
};

export default ManageInventory;