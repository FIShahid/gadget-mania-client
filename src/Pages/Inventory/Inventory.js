import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Inventory = () => {
   
   
    const { inventoryId } = useParams()
    const [product, setProduct] = useState({});
    const [error, setError] = useState('');
    const {_id, name ,img ,description ,seller ,stock ,price} = product;

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const minus = id =>{
        const i = product.stock--;
        if(i>0){
            console.log(`{id:${i}}`);
            console.log(product);
            const url = `http://localhost:5000/inventory/${inventoryId}`
            fetch(url, {
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('success'.data);
                setProduct({...product, stock: product.stock})
            })
        }
        else return;

    }


   
    const [input, setInput] = useState(0)
    const inputValue = e =>{
        e.preventDefault()
       
        setInput(e.target.value);
        e.target.reset('')
        
    } 
    const updateStock = id =>{
        console.log(input);
        const newStock = (stock + parseInt(input));
        if(isNaN(newStock)){
            setError("Input a Number")
            return
        } 
        else{
            setError('')
        }
        console.log(parseFloat(newStock));
        const update = { ...product, stock: newStock }
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            setProduct({...product, stock: newStock})

        })
    
    }

 
    return (
        <div>
            <h2>Inventory Items: </h2>
            <br />
            <br />
            <br />
            <div className='card w-50 mx-auto'>
                <h4>{product.name}</h4>
                <img className='w-25' src={product.img} alt="" />
                <p>Description:{product.description}</p>
                <h6>Seller:{product.seller}</h6>
                <p>Stock:{product.stock}</p>
                <h6>Price:{product.price}</h6>
                <button className='btn btn-primary' onClick={()=>minus(_id)}> Delivered</button>

                <br />
                <br />
               
            <div onsubmit={inputValue}>
                <input onChange={inputValue} type="text" />
                <p>{error}</p>
                <button className='btn btn-primary' onClick={()=>updateStock(_id)}>Update Stock</button>
            </div>
            </div>


        </div>
    );
};

export default Inventory;