import React, {Component} from 'react'
import '../styles/styles.css'

class EditFields extends Component{
    constructor(){
        super()
    }
    updateResume(){
        const form = document.getElementById('editForm')
        console.log(form.elements['firstName'].value)
    }
    // const form = document.getElementById('book-form')
    // const newBook = new Book(form.elements["title"].value, 
    //                          form.elements["author"].value, 
    //                          form.elements["pages"].value, 
    //                          form.elements["read"].value)
    selectFields(selection){
        const {profile, contact, education, name, skills, workExperience} = this.props.state
        switch (selection) {
            case 'name':
                return (
                    <div className="editFields">
                        <form id='editForm'>
                            <fieldset>
                                <legend>Update your name and title.</legend>
                                <label htmlFor="firstName">First Name</label>
                                <br />
                                <input className='firstName' name='firstName' type="text" defaultValue={name.firstName} />
                                <br />
                                <label htmlFor="lastName">Last Name</label>
                                <br />
                                <input className='lastName' name='lastName' type="text" defaultValue={name.lastName} />
                                <br />
                                <label htmlFor="title">Title</label>
                                <br />
                                <input className='title' name='title' type="text" defaultValue={name.title} />
                            </fieldset>
                            <div className='editFieldButtons'>
                                <button type='button' onClick={this.updateResume}>Enter</button>
                                <button type='button'>Cancel</button>
                            </div>
                        </form>
                    </div>
                )
            case 'contact':
                return (
                    <div className="editFields">
                        Test
                    </div>
                )
            default:
                return (
                    <div className="editFields">
                        Selection Error.
                    </div>
                )
        }
    }
    
    render(){
        return(
            <div className='fieldScreen' hidden={this.props.hidden}>
                <div className='fieldBox'>
                    {this.selectFields(this.props.selection)}

                </div>
            </div>
        )
    }
}
export default EditFields;