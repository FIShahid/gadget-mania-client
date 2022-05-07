import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const axios = require('axios');

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(()=>{
            const getItems = async () =>{
                const email = user.email;
                const url = `http://localhost:5000/myItem?email=${email}`
                const {data} = await axios.get(url)
                setMyItems(data)
            }
            getItems();
    }, [user])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if( proceed){
            const url = `http://localhost:5000/inventory/${id}`;
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
            <h3>Myy Item : {myItems.length}</h3>
            {
                myItems.map(product=> <div key={product._id}>
                    <h4>{product.name}</h4> <button onClick={()=>handleDelete(product._id)} className='btn btn-danger'>Delete</button>
                    

                </div>)
            }
        </div>
    );
};

export default MyItem;