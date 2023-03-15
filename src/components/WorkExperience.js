import React, {Component} from 'react'
import '../styles/styles.css'


class WorkExperience extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="workExperience">
                <h2>Work Experience</h2>
                {this.props.workExperience.map((job)=>{
                    return (
                        <div className='job' key={job.id}>
                            <h3>{job.companyName}</h3>
                            <br />
                            {job.jobTitle}
                            <br />
                            {job.yearStart} - {job.yearEnd}
                        </div>
                    )
                })}
            </div> 
        )
    }
}

export default WorkExperience;