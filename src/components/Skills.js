import React, {Component} from 'react'
import '../styles/styles.css'

class Skills extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className={"skills " + (this.props.editMode ? "editMode" : null) } onClick={this.props.onClick}>
                <h2>SKILLS</h2>
                {this.props.skills.map((skill)=>{
                    return (
                        <div className='skill' key={skill.id}>
                            {skill.text}
                        </div>
                        )
                })}
            </div>
        )
    }
}
export default Skills;