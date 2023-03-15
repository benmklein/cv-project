import React, {Component} from 'react'
import '../styles/styles.css'


class Contact extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="contact">
                {this.props.email}
                <br />
                {this.props.phone}
                <br />
                {this.props.linkedIn}
            </div>
        )
    }
}

export default Contact;