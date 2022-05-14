import React from "react";

function Nav (props){

    const [aboutDefault, selectPage] = props
   
    
    return(
        <div>

    
<ul className="navList">
    <li> <a href="about" onClick={() =>aboutDefault(true) }>About Me</a></li>

    <li><a href="projects" onClick={() =>selectPage(false) }>My Projects</a></li>

    <li><a href="contact">Contact Me</a></li>

    <li><a href="resume">Resume</a></li>

</ul>
        </div>
    )
}

export default Nav