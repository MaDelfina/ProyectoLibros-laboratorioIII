import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const NewBook = ({ onBookDataSaved }) => {
    //llevar registro de este valor en el componente
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    const [enteredRating, setEnteredRating] = useState("");
    const [enteredPageCount, setEnteredPageCount] = useState("");
    const [enteredImageUrl, setEnteredImageUrl] = useState("");
    const [showForm, setShowForm] = useState(false);

    /*changeTitleHandler se ejecutará cada vez que ingresemos 
    una letra, número o seleccionemos algo en un dropdown */
    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value); //va a guardar siempre el último valor que se encuentra en el input en este momento
    }

    const changeAuthorHandler = (event) => {
        setEnteredAuthor(event.target.value)
    }

    const changeRatingHandler = (event) => {
        setEnteredRating(event.target.value)
    }

    const changePageCountHandler = (event) => {
        setEnteredPageCount(event.target.value)
    }

    const changeImageUrlHandler = (event) => {
        setEnteredImageUrl(event.target.value)
    }

    // función a cargo de realizar el submit
    const submitBookHandler = (event) => {
        event.preventDefault() //evita que vuelva a recargarse
        const bookData = { //objeto con los valores actuales del formulario
            bookTitle: enteredTitle,
            bookAuthor: enteredAuthor,
            bookRating:
                enteredRating !== ""
                    ? Array(parseInt(enteredRating, 10)).fill("*")
                    : Array(0),
            pageCount: parseInt(enteredPageCount, 10),
            imageUrl: enteredImageUrl,
        }

        onBookDataSaved(bookData);
        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredRating("");
        setEnteredPageCount("");
        setEnteredImageUrl("");
    }

    const handleClick = () => {
        setShowForm(!showForm);
    }

    return (
        <>
            <Button onClick={handleClick}>
                {showForm ? "Esconder" : "Agregar libro"}
            </Button>
            {showForm && (
                <Form className="text-white" onSubmit={submitBookHandler}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookTitle">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar título"
                                    onChange={changeTitleHandler}
                                    value={enteredTitle}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookAuthor">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar autor"
                                    onChange={changeAuthorHandler}
                                    value={enteredAuthor}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookRating">
                                <Form.Label>Puntuación</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de estrellas"
                                    max={5}
                                    min={0}
                                    onChange={changeRatingHandler}
                                    value={enteredRating}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookPageCount">
                                <Form.Label>Cantidad de páginas</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de páginas"
                                    min={1}
                                    onChange={changePageCountHandler}
                                    value={enteredPageCount}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="bookImageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresar url de imagen"
                                onChange={changeImageUrlHandler}
                                value={enteredImageUrl}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">
                                Agregar lectura
                            </Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </>
    );
};

NewBook.propTypes = {
    onBookDataSaved: PropTypes.func.isRequired,
};

export default NewBook;