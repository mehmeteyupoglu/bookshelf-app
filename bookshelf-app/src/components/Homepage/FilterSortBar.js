import React from 'react';
import { connect } from "react-redux"
import { Nav, NavbarText } from 'reactstrap';
import { categories } from "../../constants"
import { StyledNavbarText } from "./FilterSortBarStyles"
import { setFilter } from "../../state/ducks/books/actions"

const FilterSortBar = (props) => {
    const {activeFilter, setFilter} = props
    return (
        <div>
            <Nav className="bg-white">
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

    </div>
    );
}

const mapStateToProps = state => {
    return {
        activeFilter : state.books.filter
    }
}

const mapDispatchToProps = {
    setFilter
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterSortBar);
