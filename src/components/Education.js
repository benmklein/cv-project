import React, {Component} from 'react'
import '../styles/styles.css'

class Education extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className="education">
                <h2>Education</h2>
                {this.props.education.map((school)=>{
                    return (
                        <div className='school' key={school.id}>
                            <h3 className='schoolName'>
                                {school.schoolName}
                            </h3>
                            {school.yearStart} - {school.yearEnd}
                            <br />
                            {school.degreeTitle}
                        </div>
                        )
                })}
            </div>
        )
    }
}
export default Education;