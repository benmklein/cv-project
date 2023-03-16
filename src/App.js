import React, { Component } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Name from "./components/Name";
import Profile from "./components/Profile";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import uniqid from "uniqid";
import "./styles/styles.css";
import EditBar from "./components/EditBar";
import EditFields from "./components/EditFields";

class App extends Component {
    constructor() {
        super();
        this.state = {
            editMode: false,
            hideEditFields: true,
            editSelection: "",
            name: {
                firstName: "John",
                lastName: "Doe",
                title: "Software Engineer",
            },
            contact: {
                phone: "555-5555",
                email: "johndoe@gmail.com",
                linkedIn: "linkedin.com",
            },
            education: [
                {
                    schoolName: "Harvard",
                    yearStart: "2020",
                    yearEnd: "2022",
                    degreeTitle: "Bachelor's of Science",
                    id: uniqid(),
                },
            ],
            workExperience: [
                {
                    companyName: "Google",
                    jobTitle: "Software Engineer",
                    yearStart: "2022",
                    yearEnd: "Current",
                    description:
                        "This is a description for the work done at this company. Be sure to emphasise skills and strengths relevant to the job. Try to use industry specific terms.",
                    id: uniqid(),
                    bulletPoints: [
                        {
                            text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
                            id: uniqid(),
                        },
                        {
                            text: "similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
                            id: uniqid(),
                        },
                        {
                            text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus",
                            id: uniqid(),
                        },
                    ],
                },
            ],
            profile:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
            skills: [
                {
                    text: "Javascript",
                    id: uniqid(),
                },
                {
                    text: "HTML/CSS",
                    id: uniqid(),
                },
                {
                    text: "React.js",
                    id: uniqid(),
                },
                {
                    text: "Leadership",
                    id: uniqid(),
                },
                {
                    text: "Communication",
                    id: uniqid(),
                },
            ],
        };
    }

    onEditModeClicked = () => {
        this.setState({ editMode: true });
    };
    onViewModeClicked = () => {
        this.setState({ editMode: false });
    };
    onClickSection = (section)=>{
        if (this.state.editMode){
            this.setState({editSelection: section, 
                           hideEditFields: false,
                           editMode: false},
                           ()=>console.log(this.state.editSelection + " was selected."))
        }
    }

    render() {
        const { firstName, lastName, title } = this.state.name;
        const { phone, email, linkedIn } = this.state.contact;
        const { editMode } = this.state;

        return (
            <div className="App">
                <EditFields
                    hidden={this.state.hideEditFields}
                    selection={this.state.editSelection}
                    state={this.state}
                />
                <EditBar
                    editModeClicked={this.onEditModeClicked}
                    viewModeClicked={this.onViewModeClicked}
                    hidden={!this.state.hideEditFields}
                />
                <div className="header">
                    <Name
                        firstName={firstName}
                        lastName={lastName}
                        title={title}
                        editMode={editMode}
                        onClick={(e)=>this.onClickSection('name', e)}
                    />
                    <Contact
                        phone={phone}
                        email={email}
                        linkedIn={linkedIn}
                        editMode={editMode}
                        onClick={(e)=>this.onClickSection('contact', e)}
                    />
                </div>
                <hr />

                <div className="body">
                    <div className="column1">
                        <Skills
                            skills={this.state.skills}
                            editMode={editMode}
                            onClick={(e)=>this.onClickSection('skills', e)}
                        />
                        <Education
                            education={this.state.education}
                            editMode={editMode}
                            onClick={(e)=>this.onClickSection('education', e)}
                        />
                    </div>
                    <div className="column2">
                        <Profile
                            profile={this.state.profile}
                            editMode={editMode}
                            onClick={(e)=>this.onClickSection('profile', e)}
                        />
                        <WorkExperience
                            workExperience={this.state.workExperience}
                            editMode={editMode}
                            onClick={(e)=>this.onClickSection('workExperience', e)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
