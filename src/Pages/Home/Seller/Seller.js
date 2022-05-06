import React from 'react';
import { Card, CardGroup,  } from 'react-bootstrap';
import seller from '../../../image/seller/seller.jpg'




const Seller = () => {
    return (
        <div className='container' >
            <h4 className='text-primary text center mt-5 mb-5'>Our Selling Partner</h4>
            <CardGroup>
  <Card className='m-2'>
    <Card.Img variant="top" src={seller} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='m-2'>
    <Card.Img variant="top" src={seller} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='m-2'>
    <Card.Img variant="top" src={seller} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
  
        </div>
    )
};

export default Seller;