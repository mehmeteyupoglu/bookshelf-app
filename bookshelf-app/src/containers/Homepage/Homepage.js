import React, { Component } from 'react';
import {connect} from "react-redux"
import {Container} from "reactstrap"
import {Books, FilterSortBar} from  "../../components"
import { getBook } from "../../state/ducks/books/actions"

class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount () {
        this.props.getBook()       
    }
    render() {
        console.log(this.props)

        const allBooks = this.props.books
        let filteredBooks = []
        
        if (this.props.filter) {
            filteredBooks = allBooks.filter(book => {
                return book.categories === this.props.filter })
        } else {
                filteredBooks = allBooks
            }
        
        if(this.props.searchTerm) {
            filteredBooks = filteredBooks.filter(book => {
                return book.title.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1 
            })
        }
            
            
        if (this.props.loading){
            return (
                <h3>Books are loading...</h3>
            )
        }

        let Book = ""
        if(filteredBooks.length < 1) {
            Book = <h2>No Books Here</h2>
        } else {
            Book = <Books books={filteredBooks}/>
        }
        
        return (
            <div>
                <FilterSortBar/>
                <Container>
                    {Book}
                </Container>  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.data,
        loading: state.books.loading, 
        filter : state.books.filter,
        searchTerm : state.books.searchTerm
    }
}

const mapDispatchToProps = {
    getBook
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)