import { Card ,Button} from "react-bootstrap";
import './Card.css'; //To set standard height 
function ProductCard({ id, name, price, imageUrl }) {
    return (
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={imageUrl} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            ID: {id}<br />
            Price: ${price}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    );
  }
  export default ProductCard;