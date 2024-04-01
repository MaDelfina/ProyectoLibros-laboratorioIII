import "./BookItem.css"
import PropTypes from "prop-types"

const BookItem = ({title, author, pageCount, rating}) => {
    //logica y funciones

  return (
    //renderizar por pantalla
    <div>
        <h1>{title} </h1>
        <h3>{author} </h3>
        <div>{rating.lenght} </div>
        <p>{pageCount} paginas</p>
    </div>
  )
}

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.array
}

export default BookItem