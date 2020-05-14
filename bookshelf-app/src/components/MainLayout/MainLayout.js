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
        const Children = this.props.children
        return (
            <div>
            <Container><Children routerProps = {this.props.routerProps}/></Container>
                
            </div>
        );
    }
}

export default MainLayout;
