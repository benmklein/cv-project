import React, {Component} from 'react'
import '../styles/styles.css'

class Skills extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className={"skills" + (this.props.editMode ? " editMode" : "") } onClick={this.props.onClick}>
                <h2>SKILLS</h2>
                <ul className='skillsList'>
                    {this.props.skills.map((skill)=>{
                        return (
                            <li className='skill' key={skill.id}>
                                {skill.text}
                            </li>
                            )
                    })}
                </ul>
            </div>
        )
    }
}
export default Skills;