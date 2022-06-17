import React from "react";

import { Link, Outlet} from "react-router-dom";



//passing in the props to change state
function Nav (props){


    //destructuring props as an object
    // const {aboutDefault, setAboutDefault} = props

    // switch (setAboutDefault) {
    //     case 'projects':
    //     setAboutDefault = 'projects'
    //     break;

    //     case 'contact':
    //         setAboutDefault = 'contact'
    //         break;
            
    // }
   

    return(
        
       <>
       <nav>

       <ul className="navList">
    <li className= 'navLi'> 
    <Link to="/">About</Link>    
    </li>

    <li className= 'navLi' > 
    <Link to="/projects">Projects</Link>    
    </li>

    <li className= 'navLi'> 
    <Link to="/contact">Contact Me</Link>    
    </li>


</ul>       
       </nav>
       
       <Outlet />

       </>

        
    )
}

export default Nav


// <ul className="navList">
//     <li > <a href="about" onClick={() =>aboutDefault(true) }>About Me</a></li>

//     <li id='projects'><a href="projects" onClick={() =>setAboutDefault(false) }>My Projects</a></li>

//     <li><a href="contact" onClick={() =>setAboutDefault(false) }>Contact Me</a></li>

//     <li><a href="resume"onClick={() =>setAboutDefault(false) } >Resume</a></li>

// </ul>