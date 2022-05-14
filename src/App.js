import './App.css';
import React, { useState } from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (

    <div>
 <Header></Header>
<main className = 'mainContent'>
  <About></About>
<Projects></Projects>
<Resume></Resume>
<Contact></Contact>

</main>
<Footer></Footer>
    </div>
  
  );
}

export default App;
