import axios from 'axios';
import React, { useEffect, useState }from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Card,Container, Row, Col} from 'react-bootstrap';
import Button from '@mui/material/Button';

const UpdateInventoryItem = () => {

    const navigate = useNavigate();
    const {updateId} = useParams();
    const [plant, setPlant] = useState({});
    const [updatePlant, setUpdatePlant] = useState({});


    const {name, img, price, description, quantity, supplierName, _id} = plant;
    

    useEffect(()=> {

            const getPlant = async() => {

                const ulr = `https://plants-house.herokuapp.com/plant/${updateId}`;
                const {data} = await axios.get(ulr);
                setPlant(data);
            };
            getPlant();
    }, [updateId, updatePlant]);


    const handleDelivered = async() => {
        console.log('quantify increase');
        
        if(quantity <=0 ){
            return quantity;
        }

        else{
        const newQuantity = parseInt(quantity -1) 

            const url = `https://plants-house.herokuapp.com/plant/${updateId}`;
            const {data} = await axios.put(url, {newQuantity});
            setUpdatePlant(data.plant);
        }
       
    
    };

    const handleAddQuantify = async(e) => {
        e.preventDefault();
        const inputQuantity = e.target.quantity.value;
        const newQuantity = quantity + parseInt(inputQuantity);
        
        if(inputQuantity === '' || inputQuantity <= 0){
            return alert('Please Input valid quantity number')
        }
        else{
            const url = `https://plants-house.herokuapp.com/plant/${updateId}`;
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
                                
                                        <div className="text-end">
                                            <Button 
                                                onClick={()=> navigate('/manage-inventory')}
                                                variant="contained"> 
                                                Manage Inventory 
                                             </Button> 
                                        </div>
                                 

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