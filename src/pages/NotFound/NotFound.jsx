import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
            <div>
                <h3 className='text-danger'>  PAGE NOT FOUND 404 !!! </h3>
                <Link to='/home' className='text-center text-info text-decoration-none'> 
                        Please Continue
                 </Link>
            </div>
        </div>
    );
};

export default NotFound;