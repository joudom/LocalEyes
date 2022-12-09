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
