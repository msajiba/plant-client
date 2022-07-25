import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase-init';
import InventoryItemShow from './InventoryItemShow';
import {useNavigate} from 'react-router-dom';

const MyInventoryItems = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(()=> {

        const getItems = async() => {
            const email = user.email;
            const url = `http://localhost:5000/allPlants?email=${email}`;
            const {data} = await axios.get(url);
            setItems(data);
        };
        getItems();

    },[user]);


    const handleDeleteItem = async(id) => {

        const process = window.confirm('Are you sure delete item');

        if(process){

            const url = `http://localhost:5000/delete-plant/${id}`;
            const {data} = await axios.delete(url);
            
            const remaining = items.filter(item => item._id !== id);
            setItems(remaining);
            toast.error('Item delete successful');

        };
    };

    return (
        <Container>
            <Row>
                <Col> 
                        <div className="text-end mt-5">
                            <Button 
                                onClick={()=>navigate('/inventory-add')}
                                variant="contained" 
                                color="info"> 
                                Add New 
                            </Button>
                        </div>
                    <Table striped bordered hover size="sm">
                            <thead>
                                <tr className='text-dark bg-info text-center '>
                                    <th className='py-3'> PICTURE </th>
                                    <th className='py-3'> ITEM NAME </th>
                                    <th className='py-3'> SUPPLIER NAME </th>
                                    <th className='py-3'> PRICE </th>
                                    <th className='py-3'> QUANTITY </th>
                                    <th className='py-3'> ACTION </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    items.map(item => <InventoryItemShow 
                                                                    handleDeleteItem={handleDeleteItem}
                                                                    item={item}
                                                                    key={item._id} />)
                                }
                
                            </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default MyInventoryItems;