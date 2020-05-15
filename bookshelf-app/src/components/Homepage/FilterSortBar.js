import React from 'react';
import { connect } from "react-redux"
import { Nav, 
    Container, 
    Row, 
    Col, 
    Input, 
    InputGroup, 
    InputGroupAddon, 
    InputGroupText} from 'reactstrap';
import { categories } from "../../constants"
import { StyledNavbarText } from "./FilterSortBarStyles"
import { setFilter, searchBooks } from "../../state/ducks/books/actions"

const FilterSortBar = (props) => {
    const {activeFilter, setFilter} = props
    return (
        <div>
            

            <Container fluid className="bg-white">
                <Row>
                    <Col xs={6}>
                        <Nav >
                            <StyledNavbarText><strong>Categories</strong></StyledNavbarText>
                            <StyledNavbarText active = {activeFilter === ""} onClick={() => {

                            setFilter("")
                        }}>ALL</StyledNavbarText>
                                {
                                    categories.map((item) => {
                                        return (
                                            <StyledNavbarText active = {activeFilter === item} onClick={() => {
                                                setFilter(item)
                                            }}>{item}</StyledNavbarText>
                                        )
                                    })
                                }
                        </Nav>
                    </Col>
                    <Col xs={6}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>Search</InputGroupText>
                            </InputGroupAddon>
                            <Input onChange={(e) => {
                                props.searchBooks(e.target.value)
                            }} />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>

                

            

    </div>
    );
}

const mapStateToProps = state => {
    return {
        activeFilter : state.books.filter
    }
}

const mapDispatchToProps = {
    setFilter,
    searchBooks
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterSortBar);
