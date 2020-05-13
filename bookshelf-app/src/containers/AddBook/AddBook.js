import React from 'react'
import {AddBookForm} from "../../components"
import { Row, Col } from "reactstrap"

export default function AddBook() {
    return (
        <div>
        <Row>
            <Col xs={12}>
                <h1>Add a New Book </h1>
            </Col>
            <Col xs={12}>
                <AddBookForm />
            </Col>
        </Row>
            
            
        </div>
    )
}
