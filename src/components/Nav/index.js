import React from "react";


//passing in the props to change state
function Nav (props){


    //destructuring props as an object
    const {aboutDefault, setAboutDefault} = props

    switch (setAboutDefault) {
        case 'projects':
        setAboutDefault = 'projects'
        break;

        case 'contact':
            setAboutDefault = 'contact'
            break;
            
    }
   

    return(
        <div>

    {/* //header links to cycle through */}

<ul className="navList">
    <li > <a href="about" onClick={() =>aboutDefault(true) }>About Me</a></li>

    <li id='projects'><a href="projects" onClick={() =>setAboutDefault(false) }>My Projects</a></li>

    <li><a href="contact" onClick={() =>setAboutDefault(false) }>Contact Me</a></li>

    <li><a href="resume"onClick={() =>setAboutDefault(false) } >Resume</a></li>

</ul>
        </div>
    )
}

export default Nav