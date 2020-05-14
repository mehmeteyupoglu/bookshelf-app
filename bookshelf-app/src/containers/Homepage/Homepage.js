import React, { Component } from 'react';
import {connect} from "react-redux"
import {Books} from  "../../components"
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
        if (this.props.loading){
            return (
                <h3>Books are loading...</h3>
            )
        }
        return (
            <div>
                <h3>HomePage</h3>
                <Books books={this.props.books}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.data,
        loading: state.books.loading
    }
}

const mapDispatchToProps = {
    getBook
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)