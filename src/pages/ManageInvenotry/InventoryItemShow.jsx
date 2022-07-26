import { Button } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const InventoryItemShow = ({item, handleDeleteItem}) => {

    const {name, img, price, quantity, supplierName,email, _id} = item;
   
    return (
        <>
            <tr className='text-center'>
                <td> 
                    <img style={{width:'70px', height:'70px'}} className='rounded-circle' src={img} alt="" /> 
                </td>
                <td> {name} </td>
                <td> {email} </td>
                <td> {supplierName} </td>
                <td> ${price} </td>
                <td> {quantity} </td>
                <td>
                    <Button
                        onClick={()=>handleDeleteItem(_id)} 
                        variant="outlined" color="error">
                         <DeleteIcon />   Delete
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default InventoryItemShow;