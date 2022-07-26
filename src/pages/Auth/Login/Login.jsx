import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import auth from '../../../Firebase/Firebase-init';
import {useNavigate, useLocation} from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';
import { toast } from 'react-toastify';



const theme = createTheme();

const Login = () => {

    const [restEmail, setResetEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



    if(loading || sending){
        return <Loading />
    };

    if(user){
        navigate(from, {replace: true});
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

       await signInWithEmailAndPassword(email,password);

        try{
            const url = 'https://plants-house.herokuapp.com/login';
            const {data} = await axios.post(url, {email});
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        catch(error){
            console.log(error);
        }

    };


    
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="div" variant="div">
                            Sign in
                        </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField margin="normal" required fullWidth 
                                            onChange={(e)=>setResetEmail(e.target.value)}
                                            id="email" label="Email Address"
                                            name="email" autoComplete="email"autoFocus />
                                <TextField margin="normal" required fullWidth 
                                            name="password" label="Password" 
                                            type="password" id="password" 
                                            autoComplete="current-password"/>

                                <p className='text-danger'> {error?.message} </p>

                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    Sign In
                                </Button>
                                
                                <Grid container>
                                <Grid item xs>
                                    <p
                                        style={{cursor:'pointer'}}
                                        className='text-info'
                                        onClick={async () => {
                                        await sendPasswordResetEmail(restEmail);
                                        toast('Sent email');
                                        }}
                                        >
                                        Reset password
                                    </p>
                                </Grid>
                                <Grid item>
                                    <p  className='text-primary fs-6'
                                        style={{cursor:'pointer'}}
                                        onClick={()=> navigate('/register')}>
                                            <small>Don't have an account? Sign Up </small>
                                    </p>
                                </Grid>
                                </Grid>
                            </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
};

export default Login;