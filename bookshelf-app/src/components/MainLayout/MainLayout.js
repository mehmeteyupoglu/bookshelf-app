import React, { Component } from 'react';
import { Container } from "reactstrap"

class MainLayout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount () {
        const title = this.props.title
        document.title = title
    }
    
    render() {
        return (
            <div>
            <Container>
                {this.props.children()}
            </Container>
                
            </div>
        );
    }
}

export default MainLayout;
