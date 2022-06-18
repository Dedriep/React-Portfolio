import './App.css';
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact';
import About from './components/About';


function App() {

  // const [sections] = useState([
  //   {sectionName: "#about"}, 
  //   {sectionName: "#projects"},
  //   {sectionName: "#resume"},
  //   {sectionName:"#contact"}
  // ])

  // const [aboutDefault, setAboutDefault] = useState(sections[0])
  





return (


  <div>
  <BrowserRouter basename= '/'>
      <Header/>
          <Routes>
              <Route path="/" element={<About/>}/>
              <Route path={"/projects"} element={<Projects/>}/>
              <Route path={"/contact"} element={<Contact/>}/>
          </Routes>
      <Footer/>
  </BrowserRouter>
</div>
 



    // <div>
    //   <Header
    //    aboutDefault = {aboutDefault}
    //    selectPage = {setAboutDefault}>
    //   </Header>
    //   <main className='mainContent'>
    //     <About></About>
    //     <Projects></Projects>
    //     <Resume></Resume>
    //     <Contact></Contact>
    //   </main>
    //   <Footer></Footer>
    // </div>

  );
}




  
export default App;
