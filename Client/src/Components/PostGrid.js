import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import './PostGrid.css'

function PostGrid() {
  const navigate = useNavigate();

  const navigateToItem = (e) => {
    navigate('/item');
  }

  const exampleimg 
  = "https://www.cnet.com/a/img/resize/cf15df883a6cdfd994c1451e9b2698f859ed4c3a/hub/2017/06/06/349b7e65-a855-44f0-ae0a-6610ebca0809/apple-macbook-pro-12-inch-2017-4181.jpg?auto=webp&width=768"

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
          {Array.from({ length: 12 }).map((_, idx) => (
            <Col lg="3">
              <Card onClick={navigateToItem} style={{ cursor: "pointer" }}>
                <Card.Img variant="top" src={exampleimg} />
                <Card.Body>
                  <Card.Title>MacBook Pro</Card.Title>
                  <Card.Text>
                    MacBooks for under 1k!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default PostGrid;
