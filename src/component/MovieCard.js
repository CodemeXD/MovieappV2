import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MovieCard({title,description,rate,poster}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          
          
        </Card.Text>
        <Button variant="danger">Note : {rate}</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;