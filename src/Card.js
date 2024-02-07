import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Discription from './Discription';
import Price from './Price';
import product from './product';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Discription/>
          <Price/>
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;