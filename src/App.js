import React, {Component} from 'react'
import Contact from './components/Contact'
import Education from './components/Education'
import Name from './components/Name'
import WorkExperience from './components/WorkExperience'
import uniqid from 'uniqid'
import './styles/styles.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: {
                firstName: 'John',
                lastName: 'Doe',
                title: 'Software Engineer'
            },
            contact: {
                phone: '555-5555',
                email: 'johndoe@gmail.com',
                linkedIn: 'linkedin.com'
            },
            education: [
                {
                    schoolName: 'Harvard',
                    yearStart: '2020',
                    yearEnd: '2022',
                    degreeTitle: "Bachelor's of Science",
                    id: uniqid()
                }
            ],
            workExperience: [
                {
                    companyName: 'Google',
                    jobTitle: 'Software Engineer',
                    yearStart: '2022',
                    yearEnd: 'Current',
                    id: uniqid()
                    
                }
            ]
            
            
        }
    }
    render(){
        const {firstName, lastName, title} = this.state.name
        const {phone, email, linkedIn} = this.state.contact
        return (
            <div className="App">
                <div className='header'>
                    <Name firstName={firstName} lastName={lastName} title={title}/>
                    <Contact phone={phone} email={email} linkedIn={linkedIn} />
                </div>
                <hr />
                <Education education={this.state.education}/>
                <WorkExperience workExperience={this.state.workExperience} />
            </div>
        )
    }

}

export default App;
