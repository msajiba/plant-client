import { Button } from '@mui/material';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuListComposition from '../Shared/Header/MenuListComposition';
import Banner from './Banner';
import Inventory from './Inventory';

const Home = () => {
    return (
        <>
           <Banner> </Banner>
           <Inventory> </Inventory>  
           <MenuListComposition />  
        </>
    );
};

export default Home;