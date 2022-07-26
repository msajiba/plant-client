import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Container} from 'react-bootstrap';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase-init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';

const AddNewInventory = () => {

   const [user] = useAuthState(auth);
   const email = user.email;

    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [supplierName, setSupplierName] = useState('')
   

    if(!user){
        return <Loading />
    }

    const handleAddItem = async(e) =>{
        e.preventDefault();

        const items = {name,img, price, quantity, description, supplierName, email};
        
        const url = 'http://localhost:5000/plant';
        const res = await axios.post(url, {items})
        console.log(res);
        toast('Inventory item add successful');

        e.target.reset();
        
    }

    return (
        <Container className='shadow rounded p-5 mt-5'>
        
            <Typography variant="div" gutterBottom className='text-center'> 
                Add New Inventory Item
            </Typography>
                   <form onSubmit={handleAddItem}>

                        <Grid container spacing={3}>

                                <Grid item xs={12} sm={6}>
                                        <TextField required id="name" name="name"
                                                onBlur={e=>setName(e.target.value)}
                                                label="Name" fullWidth autoComplete="given-name"
                                                variant="standard"
                                        />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                        <TextField required id="img" 
                                                onBlur={e=>setImg(e.target.value)}
                                                label="Img" fullWidth autoComplete="given-name"
                                                variant="standard"
                                        />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                        <TextField required id="description" 
                                                onBlur={e=>setDescription(e.target.value)}
                                                label="Description" fullWidth autoComplete="given-name"
                                                variant="standard"
                                        />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                        <TextField required id="price" 
                                                onBlur={e=>setPrice(e.target.value)}
                                                label="Price" fullWidth autoComplete="given-name"
                                                variant="standard"
                                        />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                        <TextField required id="quantity" 
                                                onBlur={e=>setQuantity(e.target.value)}
                                                label="Quantity" fullWidth autoComplete="given-name"
                                                variant="standard"
                                        />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                        <TextField required id="supplier" 
                                                onBlur={e=>setSupplierName(e.target.value)}
                                                label="Supplier Name" fullWidth autoComplete="given-name"
                                                variant="standard"
                                        />
                                </Grid>
                            
                        </Grid>

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    Add Item
                        </Button>

                   </form>
        </Container>
    );
};

export default AddNewInventory;