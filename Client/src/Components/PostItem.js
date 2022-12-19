import React from "react";
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
  const url = 
  `https://maps.googleapis.com/maps/api/staticmap?center=${item.address}%20${item.city}%20${item.state}%20${item.zip}&zoom=17&scale=2&size=480x410&maptype=roadmap&format=jpg&key=${staticKey}&markers=size:mid%7Ccolor:0xf13709%7Clabel:%7C${item.address}%20${item.city}%20${item.state}%20${item.zip}`

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
          <Col xxl={8} className='text' style={{ borderRight: "2px solid black", borderBottom: "2px solid black" }}>
            <h1>The Pic</h1><br/>
            <img src
            ={item.images} className="img" alt="..."/>
          </Col>
          <Col xxl={4} style={{ borderBottom: "2px solid black" }}>
            <div className="text">
                  <br/>
                  <h1>The Deal</h1> <br/> 
                  <h4>${item.total}</h4>
                  {/* <br/><br/>
                Posted: 12/06/2022<br/>
                Ends: 12/09/2022<br/><br/> */}
              <div className="text location">
                CATEGORY: <br/>
                {item.category} <br/><br/> 
                DEAL:<br/>
                {item.description}       
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{height: "48.5vh"}}>
          <Col xxl={4} className='text' style={{ borderRight: "2px solid black" }}>
              <h1>The Spot</h1><br/>
            <div className="text location">
                STORE: <br/>
                {item.store}<br/><br/><br/>
                ADDRESS: <br/>
                {item.address} {item.city}, {item.state} {item.zip}<br/><br/><br/>          
              </div>
          </Col>
          <Col xxl={5} className='text' style={{ borderRight: "2px solid black" }}>
            <img 
              width="95%" 
              src={url}
              alt="Google Map" />
          </Col>
          <Col xxl={3} className='text'>
          <h1>The Local</h1><br/>
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