import React from 'react';
import {Card} from 'react-bootstrap';
import Button from '@mui/material/Button';

const InventoryShow = ({item}) => {
    const {name, img, price, description, quantity, supplierName} = item;
    return (
        <div>
            <Card className='mt-2'>
                <Card.Img className='w-100 img-fluid' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name} <small className='text-danger'>${price} </small> </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='text-start'>
                        <h5> Quantity :{quantity} </h5>
                        <h6 > SupplierName: {supplierName} </h6>
                    </Card.Text>
                    <div className="text-end">
                     <Button size="small">Update</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InventoryShow;