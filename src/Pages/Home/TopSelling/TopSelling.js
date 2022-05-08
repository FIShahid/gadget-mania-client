import React from 'react';
import { Card, CardGroup,  } from 'react-bootstrap';
import samsung from '../../../image/product/samsung.jpg'
import iphone from '../../../image/product/iphone.jpg'
import macbook from '../../../image/product/macbook.jpg'

const TopSelling = () => {
    return (
      <div className='container' >
          <h4 className=' text-center mt-5 mb-5' style={{color:'#ef5350'}}>Top Selling Products</h4>
            <CardGroup>
  <Card className='m-2'>
    <Card.Img variant="top" src={macbook} />
    <Card.Body>
      <Card.Title>MacBook Pro M1</Card.Title>
      
    </Card.Body>
   
  </Card>
  <Card className='m-2'>
    <Card.Img variant="top" src={samsung} />
    <Card.Body>
      <Card.Title>Samsung s21 Ultra</Card.Title>
      
    </Card.Body>
    
  </Card>
  <Card className='m-2'>
    <Card.Img variant="top" src={iphone} />
    <Card.Body>
      <Card.Title>iPhone 13 pro</Card.Title>
      
    </Card.Body>
    
  </Card>
</CardGroup>
  
        </div>
    )
};

export default TopSelling;