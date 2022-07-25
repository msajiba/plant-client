import React from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase-init';
import Loading from '../../Shared/Loading/Loading';


const theme = createTheme();

const Register = () => {

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    if(loading){
        return <Loading />
    };

    if(user){
        navigate('/login');
        console.log(user);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    };

    
     
    
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Register
                        </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField margin="normal" required fullWidth 
                                            id="email" label="Email Address"
                                            name="email" autoComplete="email"autoFocus />
                                <TextField margin="normal" required fullWidth 
                                            name="password" label="Password" 
                                            type="password" id="password" 
                                            autoComplete="current-password"/>
                    
                                <p className='text-danger'> {error?.message} </p>
                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    Register
                                </Button>
                                
                                <Grid container>
                                <Grid item>
                                    <p className='text-primary fs-6'
                                        style={{cursor:'pointer'}}
                                      onClick={()=> navigate('/login')}>
                                        <small> Don't have an account? Sign Up </small>
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

export default Register;