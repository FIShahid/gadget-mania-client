import React from 'react';
import notFound from '../../image/notFound/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;