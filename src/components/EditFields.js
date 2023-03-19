import React, { Component } from "react";
import "../styles/styles.css";
import uniqid from "uniqid";
import deleteIcon from "../images/delete.svg";
import EditFieldsButtons from "./EditFieldsButtons";

class EditFields extends Component {
    constructor() {
        super();
    }

    getNameUpdate = () => {
        const form = document.getElementById("editForm");
        return {
            name: {
                firstName: form.elements["firstName"].value,
                lastName: form.elements["lastName"].value,
                title: form.elements["title"].value,
            },
        };
    };
    getContactUpdate = () => {
        const form = document.getElementById("editForm");
        return {
            contact: {
                email: form.elements["email"].value,
                phone: form.elements["phone"].value,
                linkedIn: form.elements["linkedIn"].value,
            },
        };
    };
    getSkillsUpdate = () => {
        const form = document.getElementById("editForm");
        const array = [...form.elements].filter(
            (elem) => elem.className === "skill"
        );
        const updatedInfo = array.map((elem) => {
            return {
                text: elem.value,
                id: uniqid(),
            };
        });
        return { skills: updatedInfo };
    };
    getEducationUpdate = () => {
        const form = Array.from(document.getElementById("editForm").elements);
        let updatedInfo = [];
        for (let i = 1; i < form.length - 3; i = i + 4) {
            let school = {
                schoolName: form[i].value,
                yearStart: form[i + 1].value,
                yearEnd: form[i + 2].value,
                degreeTitle: form[i + 3].value,
                id: uniqid(),
            };
            updatedInfo.push(school);
        }
        return { education: updatedInfo };
    };
    getWorkUpdate = () => {
        const form = Array.from(document.getElementById("editForm").elements);
        let updatedInfo = [];
        let i = 1;
        console.log(form);
        while (form[i].name === "companyName") {
            let work = {
                companyName: form[i].value,
                jobTitle: form[i + 1].value,
                yearStart: form[i + 2].value,
                yearEnd: form[i + 3].value,
                description: form[i + 4].value,
                id: uniqid(),
            };
            i += 5;
            let bulletpoints = [];
            while (form[i].name === "bulletpoint") {
                let point = {
                    text: form[i].value,
                    id: uniqid(),
                };
                bulletpoints.push(point);
                i++;
            }
            work.bulletPoints = bulletpoints;
            console.log(work);
            updatedInfo.push(work);
            i += 2;
        }
        console.log(updatedInfo);
        return { workExperience: updatedInfo };
    };
    getProfileUpdate = () => {
        const form = document.getElementById("editForm");
        return {
            profile: form.elements["profile"].value,
        };
    };

    selectFields(selection) {
        const { profile, contact, education, name, skills, workExperience } =
            this.props.state;
        switch (selection) {
            case "workExperience":
                return (
                    <div className="editFields">
                        <form id="editForm">
                            <fieldset>
                                <legend>Update your work experience.</legend>
                                {workExperience.map((work) => {
                                    return (
                                        <div className="work" key={work.id}>
                                            <div className="workField">
                                                <label htmlFor="companyName">
                                                    Workplace Name
                                                </label>
                                                <input
                                                    className="companyName"
                                                    name="companyName"
                                                    type="text"
                                                    defaultValue={
                                                        work.companyName
                                                    }
                                                    display="inline-block"
                                                />
                                            </div>
                                            <br />
                                            <div className="workField">
                                                <label htmlFor="jobTitle">
                                                    Job Title
                                                </label>
                                                <input
                                                    className="jobTitle"
                                                    name="jobTitle"
                                                    type="text"
                                                    defaultValue={work.jobTitle}
                                                    display="inline-block"
                                                />
                                            </div>
                                            <br />
                                            <div className="workField">
                                                <label htmlFor="yearStart">
                                                    Year Started
                                                </label>
                                                <input
                                                    className="yearStart"
                                                    name="yearStart"
                                                    type="text"
                                                    defaultValue={
                                                        work.yearStart
                                                    }
                                                    display="inline-block"
                                                />
                                            </div>
                                            <br />
                                            <div className="workField">
                                                <label htmlFor="yearEnd">
                                                    Year Ended
                                                </label>
                                                <input
                                                    className="yearEnd"
                                                    name="yearEnd"
                                                    type="text"
                                                    defaultValue={work.yearEnd}
                                                    display="inline-block"
                                                />
                                            </div>
                                            <br />
                                            <label htmlFor="description">
                                                Description
                                            </label>
                                            <br />
                                            <textarea
                                                cols="30"
                                                rows="10"
                                                name="description"
                                                defaultValue={work.description}
                                                display="inline-block"
                                            />
                                            <br />
                                            {work.bulletPoints.map((point) => {
                                                return (
                                                    <div
                                                        className="bulletpoint"
                                                        key={point.id}
                                                    >
                                                        <label htmlFor="bulletpoint">
                                                            Bulletpoint
                                                        </label>
                                                        <img
                                                            className="deleteButton"
                                                            onClick={(e) =>
                                                                this.props.deleteBulletPoint(
                                                                    point.id,
                                                                    work.id,
                                                                    e
                                                                )
                                                            }
                                                            role="button"
                                                            src={deleteIcon}
                                                            alt="Delete Bullet Point"
                                                        />
                                                        <br />
                                                        <br />
                                                        <textarea
                                                            cols="30"
                                                            rows="8"
                                                            name="bulletpoint"
                                                            defaultValue={
                                                                point.text
                                                            }
                                                            display="inline-block"
                                                        />
                                                    </div>
                                                );
                                            })}
                                            <button
                                                type="button"
                                                onClick={(e) =>
                                                    this.props.addNewBulletPoint(
                                                        work.id,
                                                        e
                                                    )
                                                }
                                                className="editFieldButtons"
                                            >
                                                + Add New Bullet Point
                                            </button>
                                            <button
                                                className="editFieldButtons"
                                                onClick={(e) =>
                                                    this.props.deleteWork(
                                                        work.id,
                                                        e
                                                    )
                                                }
                                                type="button"
                                                alt="Delete Work Experience Entry"
                                            >
                                                {" "}
                                                - Delete this job
                                            </button>
                                            <br />
                                            <hr />
                                            <br />
                                        </div>
                                        
                                    );
                                })}
                                <button
                                    type="button"
                                    onClick={this.props.addNewWork}
                                    className="editFieldButtons"
                                >
                                    + Add New Job
                                </button>
                            </fieldset>
                            <EditFieldsButtons
                                updateInfo={(e) =>
                                    this.props.updateInfo(this.getWorkUpdate(), e)
                                }
                                cancelUpdate={
                                    this.props.cancelUpdate
                                }
                            />
                        </form>
                    </div>
                );
            case "education":
                return (
                    <div className="editFields">
                        <form id="editForm">
                            <fieldset>
                                <legend>Update your education.</legend>
                                {education.map((school) => {
                                    return (
                                        <div className="school" key={school.id}>
                                            <div className="schoolField">
                                                <label htmlFor="schoolName">
                                                    School Name
                                                </label>
                                                <input
                                                    className="schoolName"
                                                    name="schoolName"
                                                    type="text"
                                                    defaultValue={
                                                        school.schoolName
                                                    }
                                                    display="inline-block"
                                                />
                                            </div>
                                            <br />
                                            <div className="schoolField">
                                                <label htmlFor="yearStart">
                                                    Starting Year
                                                </label>
                                                <input
                                                    className="yearStart"
                                                    name="yearStart"
                                                    type="text"
                                                    defaultValue={
                                                        school.yearStart
                                                    }
                                                    display="inline-block"
                                                />
                                            </div>
                                            <br />
                                            <div className="schoolField">
                                                <label htmlFor="yearEnd">
                                                    Ending Year
                                                </label>
                                                <input
                                                    className="yearEnd"
                                                    name="yearEnd"
                                                    type="text"
                                                    defaultValue={
                                                        school.yearEnd
                                                    }
                                                    display="inline-block"
                                                />
                                            </div>
                                            <br />
                                            <div className="schoolField">
                                                <label htmlFor="degreeTitle">
                                                    Degree Title
                                                </label>
                                                <input
                                                    className="degreeTitle"
                                                    name="degreeTitle"
                                                    type="text"
                                                    defaultValue={
                                                        school.degreeTitle
                                                    }
                                                    display="inline-block"
                                                />
                                            </div>
                                            <br />
                                            <img
                                                className="deleteButton"
                                                onClick={(e) =>
                                                    this.props.deleteSchool(
                                                        school.id,
                                                        e
                                                    )
                                                }
                                                role="button"
                                                src={deleteIcon}
                                                alt="Delete School"
                                            />
                                            <br />
                                        </div>
                                    );
                                })}
                                <button
                                    type="button"
                                    onClick={this.props.addNewSchool}
                                    className="editFieldButtons"
                                >
                                    Add School
                                </button>
                            </fieldset>
                            <EditFieldsButtons
                                updateInfo={(e) =>
                                    this.props.updateInfo(this.getEducationUpdate(), e)
                                }
                                cancelUpdate={
                                    this.props.cancelUpdate
                                }
                            />
                        </form>
                    </div>
                );
            case "profile":
                return (
                    <div className="editFields">
                        <form id="editForm">
                            <fieldset>
                                <legend>Update your profile statement.</legend>
                                <label htmlFor="profile">Profile: </label>
                                <br />
                                <textarea
                                    cols="40"
                                    rows="20"
                                    className="profile"
                                    name="profile"
                                    defaultValue={profile}
                                />
                            </fieldset>
                            <EditFieldsButtons
                                updateInfo={(e) =>
                                    this.props.updateInfo(this.getProfileUpdate(), e)
                                }
                                cancelUpdate={
                                    this.props.cancelUpdate
                                }
                            />
                        </form>
                    </div>
                );
            case "name":
                return (
                    <div className="editFields">
                        <form id="editForm">
                            <fieldset>
                                <legend>Update your name and title.</legend>
                                <label htmlFor="firstName">First Name</label>
                                <br />
                                <input
                                    className="firstName"
                                    name="firstName"
                                    type="text"
                                    defaultValue={name.firstName}
                                />
                                <br />
                                <label htmlFor="lastName">Last Name</label>
                                <br />
                                <input
                                    className="lastName"
                                    name="lastName"
                                    type="text"
                                    defaultValue={name.lastName}
                                />
                                <br />
                                <label htmlFor="title">Title</label>
                                <br />
                                <input
                                    className="title"
                                    name="title"
                                    type="text"
                                    defaultValue={name.title}
                                />
                            </fieldset>
                            <EditFieldsButtons
                                updateInfo={(e) =>
                                    this.props.updateInfo(this.getNameUpdate(), e)
                                }
                                cancelUpdate={
                                    this.props.cancelUpdate
                                }
                            />
                        </form>
                    </div>
                );
            case "contact":
                return (
                    <div className="editFields">
                        <form id="editForm">
                            <fieldset>
                                <legend>
                                    Update your contact information.
                                </legend>
                                <label htmlFor="email">Email</label>
                                <br />
                                <input
                                    className="email"
                                    name="email"
                                    type="text"
                                    defaultValue={contact.email}
                                />
                                <br />
                                <label htmlFor="phone">Phone Number</label>
                                <br />
                                <input
                                    className="phone"
                                    name="phone"
                                    type="text"
                                    defaultValue={contact.phone}
                                />
                                <br />
                                <label htmlFor="linkedIn">LinkedIn</label>
                                <br />
                                <input
                                    className="linkedIn"
                                    name="linkedIn"
                                    type="text"
                                    defaultValue={contact.linkedIn}
                                />
                            </fieldset>
                            <EditFieldsButtons
                                updateInfo={(e) =>
                                    this.props.updateInfo(this.getContactUpdate(), e)
                                }
                                cancelUpdate={
                                    this.props.cancelUpdate
                                }
                            />
                        </form>
                    </div>
                );
            case "skills":
                return (
                    <div className="editFields">
                        <form id="editForm">
                            <fieldset>
                                <legend>Update your list of skills.</legend>
                                {skills.map((skill) => {
                                    return (
                                        <div className="skill" key={skill.id}>
                                            <label htmlFor={skill.id}>
                                                Skill
                                            </label>
                                            <input
                                                className="skill"
                                                name={skill.id}
                                                type="text"
                                                defaultValue={skill.text}
                                                display="inline-block"
                                            />
                                            <img
                                                className="deleteButton"
                                                onClick={(e) =>
                                                    this.props.deleteSkill(
                                                        skill.id,
                                                        e
                                                    )
                                                }
                                                role="button"
                                                src={deleteIcon}
                                                alt="Delete Skill"
                                            />
                                        </div>
                                    );
                                })}
                                <button
                                    type="button"
                                    onClick={this.props.addNewSkill}
                                    className="editFieldButtons"
                                >
                                    Add New Skill
                                </button>
                            </fieldset>
                            <EditFieldsButtons
                                updateInfo={(e) =>
                                    this.props.updateInfo(this.getSkillsUpdate(), e)
                                }
                                cancelUpdate={
                                    this.props.cancelUpdate
                                }
                            />
                        </form>
                    </div>
                );
            default:
                return <div className="editFields">Selection Error.</div>;
        }
    }

    render() {
        return (
            <div className="fieldScreen" hidden={this.props.hidden}>
                <div className="fieldBox">
                    {this.selectFields(this.props.selection)}
                </div>
            </div>
        );
    }
}
export default EditFields;
