import './App.css';
import React, { useState } from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';


function App() {

  const [sections] = useState([
    {sectionName: "#about"}, 
    {sectionName: "#projects"},
    {sectionName: "#resume"},
    {sectionName:"#contact"}
  ])

  const [aboutDefault, setAboutDefault] = useState(sections[0])
  

//   {
//   function displayContent (setAboutDefault){
//     switch (setAboutDefault){

//     case setAboutDefault === "#projects":
//     <Projects></Projects>;
//     break;
//     case setAboutDefault === "#contact":
//       <Contact></Contact>
//       break;
//     case setAboutDefault === "#resume":
//       <Resume></Resume>
//       break;
//       default:
//         <About></About>
//       }}
// }  



return (

    <div>
      <Header
       aboutDefault = {aboutDefault}
       selectPage = {setAboutDefault}>
      </Header>
      <main className='mainContent'>
        <About></About>
        <Projects></Projects>
        <Resume></Resume>
        <Contact></Contact>


{/* {        this.displayContent(setAboutDefault)} */}

      </main>
      <Footer></Footer>
    </div>

  );
}




  
export default App;
