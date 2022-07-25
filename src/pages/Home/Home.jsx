import { Button } from '@mui/material';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuListComposition from '../Shared/Header/MenuListComposition';
import Banner from './Banner';
import Inventory from './Inventory';

const Home = () => {
    return (
        <Container>
           <Banner> </Banner>
           <Inventory> </Inventory>  
           <MenuListComposition />  
        </Container>
    );
};

export default Home;