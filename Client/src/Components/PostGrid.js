import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function PostGrid() {
  const navigate = useNavigate();

  const navigateToItem = (e) => {
    navigate('/item');
  }

  return (
    <>
      <div className="wrapper">
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 18 }).map((_, idx) => (
            <Col xs lg="2">
              <Card onClick={navigateToItem} style={{ cursor: "pointer" }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default PostGrid;
