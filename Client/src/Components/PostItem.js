import { React, useEffect } from "react";
import Navigation from "./Navigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";
import EditModal from './EditModal'
import './PostItem.css';


const PostItem = ({item, setItem, setShouldReload}) => {
  
  console.log('item in postitem', item)

  return (
    <>
    <Navigation />
      <Container className="postbox">
        <Row className="h-50">
          <Col xxl={8} className='text border'>
            Image Carousel<br/>
            <img src
            ="https://media.istockphoto.com/id/1202959798/photo/macbook-pro-16-inch-with-touchbar-front-view.jpg
              ?s=612x612&w=0&k=20&c=Uj7nnv5j_STbkW03MaXNKQtdUxiN5AQD9JF0Dw1i0WQ="className="img" alt="..."/>
          </Col>
          <Col xxl={4} className='border'>
            <div className="text">
                Pricing / Location / Status<br/>
                  <h1>${item.total}</h1>
                Posted: 12/06/2022<br/>
                Ends: 12/09/2022<br/><br/>
              <div className="text location">
                STORE: {item.store}<br/>
                ADDRESS: {item.address},{item.city},{item.state},{item.zip}              
              </div>
                <br/>
              <div>
                Is this still on sale?<br/><br/>
                <button>YES</button> <button>NO</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{height: "48.5vh"}}>
          <Col xxl={4} className='text border'>
            Item Description<br/>
            {item.description}
          </Col>
          {/* <Col xxl={5} className='text border'>
            Local Deal Description<br/><br/>
            They have brand new MacBooks for the low out here!
            Manager says they have to sell everything to close Q4 on a strong note.
          </Col> */}
          <Col xxl={3} className='text border'>
            Local:<br/>
            Leo D.<br/>
            <img src="https://images.t3n.de/news/wp-content/uploads/2022/05/Leonardo-DiCaprio-Meme.png?class=structuredData-small" className='local' alt="..."/>
            <EditModal item={item} setItem={setItem} setShouldReload={setShouldReload}/>
            <Button variant="danger">Delete</Button>
          </Col>
        </Row>
      </Container>
      <Footer/> 
    </>
  );
};

export default PostItem;
