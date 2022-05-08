import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ManageInventory from '../ManageInventory/ManageInventory';


const Inventory = () => {


    const { inventoryId } = useParams()
    const [product, setProduct] = useState({});
    const [error, setError] = useState('');
    const { _id, name, img, description, seller, stock, price } = product;

    useEffect(() => {
        if (inventoryId) {
            const url = `https://intense-dawn-79079.herokuapp.com/inventory/${inventoryId}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setProduct(data))
        }
    }, []);

    const minus = id => {
        const i = product.stock--;
        if (i > 0) {
            console.log(`{id:${i}}`);
            console.log(product);
            const url = `https://intense-dawn-79079.herokuapp.com/inventory/${inventoryId}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success'.data);
                    setProduct({ ...product, stock: product.stock })
                })
        }
        else return;

    }



    const [input, setInput] = useState(0)
    const inputValue = e => {
        e.preventDefault()

        setInput(e.target.value);

    }
    const updateStock = id => {
        console.log(input);
        const newStock = (stock + parseInt(input));
        if (isNaN(newStock)) {
            setError("Input a Number")
            return
        }
        else {
            setError('')
        }
        console.log(parseFloat(newStock));
        const update = { ...product, stock: newStock }
        const url = `https://intense-dawn-79079.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                setProduct({ ...product, stock: newStock })
                

            })

    }


    return (
        <div>
            <h2 className='text-center mt-3' style={{color:'#ef5350'}}>Inventory Items: </h2>
            <div class="container py-3 ">
                <div class="card shadow-lg p-2">
                    <div class="row ">
                        <div class="col-md-6">
                            <img className='w-100' src={product.img} alt="" />
                        </div>
                        <div class="col-md-4 px-3">
                            <div class="card-block px-3">
                                <h4 className="card-title mt-3">{product.name}</h4>
                                <p class="card-text"><span className='fw-bold'>Description: </span>{product.description}</p>
                                <h6>Seller:{product.seller}</h6>
                                <h6>Price: $ {product.price}</h6>
                                <h5>Stock:{product.stock}</h5>
                                <button className='btn  mt-3 w-75 m-auto rounded-pill' style={{ backgroundColor: '#66bb6a' }}onClick={() => minus(_id)}> Delivered</button>
                            </div>
                        </div>

                    </div>
                </div>
                <h4 className='text-center mt-3' style={{color:'#ef5350'}}>Update Stock Quantity</h4>
                <div className='mt-3 w-50 mx-auto '>
                    <div className="form-outline mb-4">
                        <input onChange={inputValue} type="text" id="form4Example1" className="form-control" placeholder='Stock Quantity' />
                        <p>{error}</p>
                        <div className='text-center'>
                        <button className='btn w-50 ' style={{ backgroundColor: '#66bb6a' }} onClick={() => updateStock(_id)}>Update Stock</button>
                        </div>
                    </div>

                </div>
            </div>



            <div className='text-center'>
                <Link to='/manageInventory' element={<ManageInventory></ManageInventory>} > <button className='btn btn-info w-25 p-3 mx-auto'>Manage Inventory</button></Link>
            </div>


        </div>
    );
};

export default Inventory;