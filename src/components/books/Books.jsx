import BookItem from "../bookItem/BookItem";
import "./Books.css"
import propTypes from "prop-types";

const Books = ({ books }) => {
    return (
      <div className="books-container">
        {books.map((book, index) => (
          <BookItem
            key={index}
            title={book.bookTitle}
            author={book.bookAuthor}
            pageCount={book.pageCount}
            rating={book.bookRating}
            imageUrl={book.imageUrl}
          />
        ))}
      </div>
    );
  };
  
  /*PropTypes es una forma de documentar los tipos de datos 
  que se esperan que se pasen a un componente en React*/
  Books.propTypes = {
    books: propTypes.array,
  };
  
  export default Books;