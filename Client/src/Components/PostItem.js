import { React, useEffect } from "react";
import Navigation from "./Navigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";
import EditModal from './EditModal'
import axios from 'axios';
import './PostItem.css';


const PostItem = ({item, setItem, setShouldReload, posts, setPosts}) => {
  
  console.log('item in postitem', item)

  const staticKey = process.env.REACT_APP_GOOGLE_MAPS_STATIC_API_KEY;
  const stAddress = encodeURIComponent('2537 Piedmont Rd NE');
  const city = encodeURIComponent('Atlanta');
  const state = encodeURIComponent('GA');
  const zip = encodeURIComponent('30324');
  const url = 
  `https://maps.googleapis.com/maps/api/staticmap?center=${stAddress}%20${city}%20${state}%20${zip}&zoom=17&scale=2&size=480x410&maptype=roadmap&format=jpg&key=${staticKey}&markers=size:mid%7Ccolor:0xf13709%7Clabel:%7C${stAddress}%20${city}%20${state}%20${zip}`

  const deleteItem = async (id) => {
    const response = await axios.delete(`http://localhost:8000/item/${item.id}`);
    setItem({});
    setPosts(
       posts.filter((post) => {
          return post.id !== id;
       })
    );
 };

  return (
    <>
      <Navigation />
      <Container className="postbox">
        <Row className="h-50">
          <Col xxl={8} className='text border'>
            Image Carousel<br/>
            <img src
            ="https://www.cnet.com/a/img/resize/cf15df883a6cdfd994c1451e9b2698f859ed4c3a/hub/2017/06/06/349b7e65-a855-44f0-ae0a-6610ebca0809/apple-macbook-pro-12-inch-2017-4181.jpg?auto=webp&width=768"className="img" alt="..."/>
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
          <Col xxl={5} className='text border'>
            <img 
              width="95%" 
              src={url}
              alt="Google Map" />
          </Col>
          <Col xxl={3} className='text border'>
            Local:<br/>
            Leo D.<br/>
            <img src="https://images.t3n.de/news/wp-content/uploads/2022/05/Leonardo-DiCaprio-Meme.png?class=structuredData-small" className='local' alt="..."/>
            <EditModal item={item} setItem={setItem} setShouldReload={setShouldReload}/>
            <Button variant="danger" onClick={deleteItem}>Delete</Button>
          </Col>
        </Row>
      </Container>
      <Footer/> 
    </>
  );
}

export default PostItem;