import React from 'react';
import ContactForm from './components/ContactForm';
import Home from './components/Home';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';


const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <ContactForm/>
      
    </div>
  )
}

export default App
