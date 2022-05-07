import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/banner/banner1.jpg'
import banner2 from '../../../image/banner/banner2.png'
import banner3 from '../../../image/banner/banner3.jpg'

const Banner = () => {
    return (
        <div className='container'>
            <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Apple Gadgets: Smartphones, Gadgets and Premium Accessories</h2>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2>Gadgets Mania - Wholesale Suppliers Online</h2>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2>All Latest Gadget in One Place</h2>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </div>    );
};

export default Banner;