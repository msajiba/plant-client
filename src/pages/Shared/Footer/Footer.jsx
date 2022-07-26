import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <div className="bg-dark">
                <Container>
                    <Row className='text-white py-5 text-center mt-5'>
                        <Col md='4' className='py-5'> 
                            <h3 className='text-success'> CONTACT US </h3>
                            <div className="mt-2 text-center">
                                <p> Address : Dhaka Bangladesh - 1215 </p>
                                <p> Phone : 01820000012 </p>
                                <p> Email : asajib499@gmail.com </p>
                            </div>
                         </Col>
                        <Col md='4' className='py-5'> 
                                <h3 className='text-success'> INFORMATION </h3>
                            <div className="mt-2 text-center">
                                <p> New Products </p>
                                <p> Top Sellers </p>
                                <p> Our Blog </p>
                            </div>
                         </Col>
                        <Col md='4' className='py-5'> 
                        <h3 className='text-success'> OPENING HOURS </h3>
                            <div className="mt-2 text-center">
                                <h6> <small> Mon - Fri </small></h6>
                                <h6> <small className='text-italic'> 7.00 AM - 8.00PM </small></h6>

                                <div>
                                    <h6> <small> Sunday </small></h6>
                                    <h6> <small className='text-italic'> 8.00 AM - 5.00PM </small></h6>
                                </div>
                                
                            </div>
                        </Col>
                        <p className="text-center"> <small> Copyright © 2022 Discretesoft. All Rights Reserved</small> </p>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Footer;