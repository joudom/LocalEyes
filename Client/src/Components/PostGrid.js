import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './PostGrid.css';

function PostGrid({posts, setItem}) {

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
          {posts && posts.length > 0 ? (posts.map((item) => (
            <Col lg="3">
              <Link onClick={() => setItem(item)} to={`/item/${item.id}`}>
                <Card style={{ cursor: "pointer" }}>
                  <Card.Img variant="top" src={exampleimg} />
                  <Card.Body>
                    <Card.Title>{item.item_name}</Card.Title>
                    <Card.Text>
                      ${item.total}
                    </Card.Text>
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