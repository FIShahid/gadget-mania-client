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
                    <h3>Dream. Plan. Explore.</h3>
                    <p>The world is a book and those who do not travel read only one page..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Your Adventure Begins Here</h3>
                    <p>Not all those who wander are lost...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Into the Wild with Me</h3>
                    <p>Life is either a daring adventure or nothing at all.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </div>    );
};

export default Banner;