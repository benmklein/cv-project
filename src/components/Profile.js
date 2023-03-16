import React, {Component} from 'react'
import '../styles/styles.css'


class Profile extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className={"profile " + (this.props.editMode ? "editMode" : null) } onClick={this.props.onClick}>
                <h2>PROFILE</h2>
                <p>{this.props.profile}</p>
            </div>
        )
    }
}

export default Profile;