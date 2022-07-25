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

    const handleAddQuantify = async(e) => {
        e.preventDefault();
        const inputQuantity = e.target.quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(inputQuantity);
        
        if(inputQuantity === '' || inputQuantity <= 0){
            return alert('please add quantity')
        }
        else{
            const url = `http://localhost:5000/plant/${updateId}`;
            const {data} = await axios.put(url, {newQuantity});
            setUpdatePlant(data.plant);
            e.target.reset();
        }

        
        
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
                                                    <h5 className='text-info'> Quantity : {quantity} </h5>
                                                    
                                                    <Button 
                                                            onClick={handleDelivered}
                                                            size="small">Delivered
                                                    </Button>

                                                        <form onSubmit={handleAddQuantify} 
                                                                className='d-flex justify-content-end align-items-center'>

                                                            <input style={{width:'50px'}} 
                                                                className='border rounded text-center'
                                                                placeholder='0'
                                                                type="number" name="quantity"/>
                                                            
                                                            <Button 
                                                                    type="submit"         
                                                                    size="small">Add 
                                                            </Button> 

                                                        </form>
                                            
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