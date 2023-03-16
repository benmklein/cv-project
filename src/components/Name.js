import React, {Component} from 'react'
import '../styles/styles.css'


class Name extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className={"name " + (this.props.editMode ? "editMode" : null) } onClick={this.props.onClick}>
                <h1 className='firstName'>{this.props.firstName} </h1> <h1 className='lastName'>{this.props.lastName}</h1>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default Name;