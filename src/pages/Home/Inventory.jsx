import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InventoryShow from './InventoryShow';
import {Container, Row, Col} from 'react-bootstrap';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(()=> {

        const getItems = async() => {
            
            const url = 'http://localhost:5000/plants';

            const {data} = await axios.get(url);
            setItems(data.slice(0,6));
            
        };
        getItems();

    },[])


    return (

        <>
            <Container>
                <Row>
                    <Col>
                        <Row className='text-center'>

                            <h3 className='text-center text-info'> Inventory Item </h3>

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