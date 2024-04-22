import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import propTypes from "prop-types";

const BookSearch = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearch, setShowSearch] = useState(true);

    const handlerSearch = () => {
        onSearch(searchTerm);
    }

    const handerClick = () => {
        setShowSearch(!showSearch)
    }

    return (
        <>
            <Button onClick={handerClick}>
                {showSearch ? "Esconder" : "Mostrar"}
            </Button>
            {showSearch &&
                <Row className="justify-content-center">
                    <Col md={6} lg={4}>
                        <Form>
                            <Form.Group controlId="formBasicSearch">
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar libro por nombre"
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" onClick={handlerSearch}>
                                Buscar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            }
        </>
    );
}

BookSearch.propTypes={
    onSearch: propTypes.func,
};

export default BookSearch;