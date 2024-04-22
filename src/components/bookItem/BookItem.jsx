import "./BookItem.css"
import propTypes from "prop-types";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const BookItem = ({ title, author, rating, pageCount, imageUrl }) => {
  /*e recibe como parámetro el valor inicial que queremos darle a una variable que creará React. 
  Retorna un arreglo con dos valores, el primer valor es nuestra nueva variable ya inicializada 
  y el segundo es una función que nos servirá para setear el valor de dicha variable*/
  const [newTitle, setNewTitle] = useState(title);

  const clickHandler = () => {
    setNewTitle("Actualizado!")
  }
  
  return (
    <div>
      <Card>
        <Card.Img
          height={400}
          variant="top"
          src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
        />
        <Card.Body>
          <Card.Title>{newTitle}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
          <div>{rating?.length} estrellas</div>
          <p>{pageCount} páginas</p>
          <Button className="btn btn-warning" onClick={clickHandler}>
            Actulizar titulo
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

BookItem.propTypes = {
  title: propTypes.string,
  author: propTypes.string,
  pagesCount: propTypes.number,
  rating: propTypes.array,
  imageUrl: propTypes.string,
};

export default BookItem;
