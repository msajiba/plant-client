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
import AddIcon from '@mui/icons-material/Add';
import Loading from '../Shared/Loading/Loading';




const ManageInventoryItem = () => {

    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [countItem, setCountItem] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);



    //GET ALL PLANTS
    useEffect(()=> {
        const getItems = async() => {
            const url = `https://plants-house.herokuapp.com/plants?page=${page}&size=${size}`;
            try{
                const {data} = await axios.get(url);
                setItems(data);
            }
            catch(error){
                console.log(error.response);
            }
        };
        getItems();

    },[page, size]);

    

    //GET COUNT 
    useEffect(()=> {
        const getCount = async () =>{
            const url = 'https://plants-house.herokuapp.com/plantCount';
            const {data} = await axios.get(url);
            const count = data.count;
            const pages = Math.ceil(count/10);
            setCountItem(pages);
        }
        getCount();

    }, []);



    const handleDeleteItem = async(id) => {

        const process = window.confirm('Are you sure delete item');

        if(process){

            const url = `https://plants-house.herokuapp.com/delete-plant/${id}`;
            
            try{
                const {data} = await axios.delete(url);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
                toast.error('Item delete successful');
            }
            catch(error){
                if(error.response.status === 403 || error.response.status ===401){
                    navigate('/login')
               }
            }

        };
    };



    return (
        <Container>
            <Row>
                <Col> 
                        <div className="mt-5 d-flex justify-content-between align-items-center">
                            <h4 className='d-block border p-1 rounded bg-white'> {items.length} </h4>
                            <Button 
                                onClick={()=>navigate('/inventory-add')}
                                variant="contained" 
                                color="info"> 
                                <AddIcon /> Add New 
                            </Button>
                        </div>
                    <Table striped bordered hover size="sm" responsive>
                            <thead>
                                <tr className='text-dark bg-info text-center '>
                                    <th className='py-3'> PICTURE </th>
                                    <th className='py-3'> ITEM NAME </th>
                                    <th className='py-3'> EMAIL </th>
                                    <th className='py-3'> SUPPLIER NAME </th>
                                    <th className='py-3'> PRICE </th>
                                    <th className='py-3'> QUANTITY </th>
                                    <th className='py-3'> ACTION </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    items.map(item => <InventoryItemShow 
                                                                    key={item._id}
                                                                    handleDeleteItem={handleDeleteItem}
                                                                    item={item}
                                                                    />)
                                }
                
                            </tbody>
                    </Table>

                    <div className="text-end">
                        {
                            [...Array(countItem).keys()]
                            .map(number => <button
                                                className={page === number ? 'text-danger px-2' : 'mx-2 px-2'}
                                                onClick ={()=>{setPage(number)}}> 
                                            {number +1} 
                                            </button> )
                        }

                        {size}
                        <select onChange={(e)=>setSize(e.target.value)} className='mx-2'>
                            <option value="5" selected >5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default ManageInventoryItem;