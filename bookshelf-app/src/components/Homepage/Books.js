import React from 'react'
import Book from "./Book"
import { Row, Col, Container } from 'reactstrap'

function Books(props) {
    return (
        
            <Row>
                {
                    props.books.map(item => {
                        return (
                            <Col xs={3}>
                                <Book {...item} />
                            </Col>
                        )
                        
                    })
                }
            </Row>
        
    )
}

export default Books