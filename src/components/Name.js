import React, {Component} from 'react'
import '../styles/styles.css'


class Name extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="name">
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default Name;