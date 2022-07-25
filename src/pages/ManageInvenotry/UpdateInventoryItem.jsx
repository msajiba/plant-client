import axios from 'axios';
import React, { useEffect, useState }from 'react';
import {useParams} from 'react-router-dom';
import {Card,Container, Row, Col} from 'react-bootstrap';
import Button from '@mui/material/Button';

const UpdateInventoryItem = () => {

    const {updateId} = useParams();

    const [plant, setPlant] = useState({});
    const [updatePlant, setUpdatePlant] = useState({});

    const {name, img, price, description, quantity, supplierName, _id} = plant;

    useEffect(()=> {

            const getPlant = async() => {

                const ulr = `http://localhost:5000/plant/${updateId}`;
                const {data} = await axios.get(ulr);
                setPlant(data);
            };
            getPlant();
    }, [updateId, updatePlant]);


    const handleDelivered = async() => {
        console.log('quantify increase');
        const newQuantity = parseInt(quantity -1) ;

        const url = `http://localhost:5000/plant/${updateId}`;
        const {data} = await axios.put(url, {newQuantity});
        setUpdatePlant(data.plant);
    
    };

    const handleAddQuantify = (e) => {

    }
    

    return (
        <Container>
            <Row className=''>
                <Col>
                       <div className='w-50 mx-auto my-5'>
                                <h3 className='text-center text-info'> {updateId}</h3>
                                <Card className='mt-2'>
                                    <Card.Img style={{height:'350px'}} className='w-100 img-fluid' variant="top" src={img} />
                                    <Card.Body>
                                        <Card.Title>{name} <small className='text-danger'>${price} </small> </Card.Title>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                        <Card.Text className='text-start'>
                                            <h6 > SupplierName: {supplierName} </h6>
                                                <div className="text-end">
                                                    <h5> Quantity :{quantity} </h5>
                                                    <Button 
                                                            onClick={handleDelivered}
                                                            size="small">Delivered
                                                    </Button>

                                                    <Button 
                                                        
                                                            size="small">Form
                                                    </Button>

                                                </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            
                       </div>
                </Col>
            </Row>
        </Container>
    );
};

export default UpdateInventoryItem;