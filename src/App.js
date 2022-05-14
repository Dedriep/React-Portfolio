import './App.css';
import React, { useState } from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';

const [aboutDefault, selectPage] = useState("#about")

function App() {


  {
  function displayContent (selectPage){
    switch (selectPage){

    case selectPage === "#projects":
    <Projects></Projects>;
    break;
    case selectPage === "#contact":
      <Contact></Contact>
      break;
    case selectPage === "#resume":
      <Resume></Resume>
      break;
      default:
        <About></About>
      }}
}  



return (

    <div>
      <Header
       aboutDefault = {aboutDefault}
       selectPage = {selectPage}>
      </Header>
      <main className='mainContent'>
        {/* <About></About>
        <Projects></Projects>
        <Resume></Resume>
        <Contact></Contact>

 */}
{        this.displayContent(selectPage)}

      </main>
      <Footer></Footer>
    </div>

  );
}




  
export default App;
