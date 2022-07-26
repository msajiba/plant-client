import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InventoryShow from './InventoryShow';
import {Container, Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {

    const navigate = useNavigate();
    const [items, setItems] = useState([]);


    useEffect(()=> {

        const getItems = async() => {
            
            const url = 'https://plants-house.herokuapp.com/plants';

            try{
                const {data} = await axios.get(url);
                setItems(data.slice(0,6));
               
            }
            catch(error){
               if(error.response.status === 403 || error.response.status ===401){
                    navigate('/login')
               }
            }
           
        };
        getItems();  

    },[])


    return (

        <>
            <Container>
                <Row>
                    <Col>
                        <Row className='text-center'>
                             
                            <h2 className='text-center text-success my-5'> Inventory Item </h2>
                                <hr />

                            {
                                items.map(item=> <Col md='4' key={item._id}> 
                                                        <InventoryShow item={item}> </InventoryShow>
                                                </Col>)
                            }

                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Inventory;