import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    style={{height:'500px'}}
                    className="d-block w-100 "
                    src={banner1}
                    alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height:'500px'}}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height:'500px'}}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;