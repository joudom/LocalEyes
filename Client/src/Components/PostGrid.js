import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './PostGrid.css';


function PostGrid({posts, setItem, getImgSrc}) {
  

  function getImgSrc(img, mimeType) {
    if (img && mimeType)
      return `data:${mimeType};base64,${img}`;

    return null;
  }
  
  
  // const imageformat = 'image/jpeg';
  // const exampleimg
  //   = `data:${imageformat};base64,${images}`;
  console.log(posts)

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
       
          {posts && posts.length > 0 ? (posts.map((item, id) => (
            <Col key={id} lg="3">
              <Link onClick={() => setItem(item)} to={`/item/${item.id}`}>
            
                <Card style={{ cursor: "pointer" }}>
                  <Card.Img variant="top" src={getImgSrc(item.images, item.imageformat)} />
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
              : null}
           
        </Row>
      </Container>
    </>
  );
}

export default PostGrid;