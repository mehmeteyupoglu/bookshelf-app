import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardLink
  } from 'reactstrap';
import StyledBookCard from "./BookStyles"

const Book = (props) => {

    const {image, rating, title} = props
    return (
    <StyledBookCard>
            <Card>
                <CardImg top width="100%" src={image} alt={title} />
                <CardBody>
                    <CardText>
                        <strong>{`${rating}/5`}</strong>
                    </CardText>
                    <CardText>
                        <strong>{title}</strong>
                    </CardText>
                    <CardLink>
                        Edit
                    </CardLink>
                    <CardLink>
                        Details
                    </CardLink>
                </CardBody>
            </Card>
    </StyledBookCard>
    );
}

export default Book;
