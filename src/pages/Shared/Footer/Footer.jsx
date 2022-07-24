import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <div className="bg-dark">
                <Container>
                    <Row className='text-white py-5 text-center mt-5'>
                        <Col md='4' className='py-5'> Footer part 1 </Col>
                        <Col md='4' className='py-5'> Footer part 2 </Col>
                        <Col md='4' className='py-5'> Footer part 3 </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Footer;