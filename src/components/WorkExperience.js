import React, {Component} from 'react'
import '../styles/styles.css'


class WorkExperience extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className={"workExperience " + (this.props.editMode ? "editMode" : null) } onClick={this.props.onClick}>
                <h2>WORK EXPERIENCE</h2>
                {this.props.workExperience.map((job)=>{
                    return (
                        <div className='job' key={job.id}>
                            <h3>{job.jobTitle}</h3>
                            {job.companyName}
                            <br />
                            {job.yearStart} - {job.yearEnd}
                            <br />
                            {job.description}
                            <ul className='bulletPoints'>
                                {job.bulletPoints.map((point)=>{
                                    return (
                                        <li key={point.id}>
                                            {point.text}
                                        </li>
                                        )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div> 
        )
    }
}

export default WorkExperience;