import React, {Component} from 'react'
import '../styles/styles.css'

class EditBar extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className="editBar">
                <button type='button' hidden={this.props.hidden} onClick={this.props.editModeClicked}>Edit Mode</button>
                <button type='button' hidden={this.props.hidden} onClick={this.props.viewModeClicked}>View Mode</button>
            </div>
        )
    }
}
export default EditBar;