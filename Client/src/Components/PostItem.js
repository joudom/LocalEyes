import React from "react";
import Navigation from "./Navigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "./Footer";
import './PostItem.css'

const PostItem = () => {
  return (
    <>
    <Navigation />
      <Container className="postbox">
        <Row className="h-50">
          <Col sm={8} className='border'>
            Image Carousel<br/>
            <img src
            ="https://media.istockphoto.com/id/1202959798/photo/macbook-pro-16-inch-with-touchbar-front-view.jpg
              ?s=612x612&w=0&k=20&c=Uj7nnv5j_STbkW03MaXNKQtdUxiN5AQD9JF0Dw1i0WQ="className="img" alt="..."/>
          </Col>
          <Col sm={4} className='border'>
            <div className="text">
                Pricing / Location / Status<br/>
                  <h1>$750.00</h1>
                Posted: 12/06/2022<br/>
                Ends: 12/09/2022<br/><br/>
              <div className="location">
                STORE: Best Buy<br/>
                ADDRESS: 1234 Shopping Blvd Atlanta, GA 30313
              </div>
                <br/>
              <div>
                Is this still on sale?<br/><br/>
                <button>YES</button>  <button>NO</button>
              </div>
            </div>
          </Col>
        </Row>
          <br/>
        <Row className="h-50">
          <Col sm className='border'>
            Item Description<br/><br/>
            The new MacBook Pro delivers game-changing performance for pro users. 
            With the powerful M1 Pro to supercharge pro-level workflows while getting amazing battery life.
            And with an immersive 14-inch Liquid Retina XDR display and an array of pro ports, you can do more than ever with MacBook Pro.
          </Col>
          <Col sm className='border'>
            Local Deal Description<br/><br/>
            They have brand new MacBooks for the low out here!
            Manager says they have to sell everything to close Q4 on a strong note.
          </Col>
          <Col sm className='border'>
            Local: <br/><br/>
            Leo D.<br/>
            <img src="https://images.t3n.de/news/wp-content/uploads/2022/05/Leonardo-DiCaprio-Meme.png?class=structuredData-small" className='local' alt="..."/>
          </Col>
        </Row>
      </Container>
      <Footer/> 
    </>
  );
};

export default PostItem;
