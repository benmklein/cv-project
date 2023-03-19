import React, { Component } from "react";
import "../styles/styles.css";
import githublogo from "../images/github.jpg"
import linkedinlogo from "../images/linkedin.png"

class Footer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="footer">
        <p className="footer-text">made by: </p>  
        <p className="footer-name">benmklein</p><p className="footer-text">&nbsp; 2023 </p>
        
     
        <a href="https://github.com/benmklein">
        <img className="githublogo" src={githublogo} alt="Github"></img> 
        </a>
        &nbsp;
        <a href="https://www.linkedin.com/in/benmklein/">
        <img className="linkedinlogo" src={linkedinlogo} href="https://www.linkedin.com/in/benmklein/" alt="linkedin"></img>
        </a>
      </div>
    );
  }
}

export default Footer;
