import React, { Component } from 'react';

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
            <Children routerProps = {this.props.routerProps}/>   
            </div>
        );
    }
}

export default MainLayout;
