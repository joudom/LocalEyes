import { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './PostGrid.css';


function PostGrid({posts, setItem}) {

  const exampleimg 
  = "https://media.istockphoto.com/id/1202959798/photo/macbook-pro-16-inch-with-touchbar-front-view.jpg?s=612x612&w=0&k=20&c=Uj7nnv5j_STbkW03MaXNKQtdUxiN5AQD9JF0Dw1i0WQ="

  return (
    <>
      <Container>
      <div className='banner-text'>
        <p>
          whenever.<br/>
          wherever.<br/>
          shop like a local.
        </p>
        </div>
        <Row className="g-4 cards">
          {posts && posts.length > 0 ? (posts.map((item) => (
            <Col lg="3">
              <Link onClick={() => setItem(item)} to={`/item/${item.id}`}>
                <Card style={{ cursor: "pointer" }}>
                  <Card.Img variant="top" src={exampleimg} />
                  <Card.Body>
                    <Card.Title>{item.item_name}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )))
          :null}
        </Row>
      </Container>
    </>
  );
}

export default PostGrid;
