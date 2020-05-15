import React from 'react'
import {AddBookForm} from "../../components"
import { Row, Col, Container } from "reactstrap"

export default function AddBook() {
    return (
        <div>
        <Container>
            <Row>
                <Col xs={12}>
                    <h1>Add a New Book </h1>
                </Col>
                <Col xs={12}>
                    <AddBookForm />
                </Col>
            </Row>
        </Container>
                   
        </div>
    )
}
