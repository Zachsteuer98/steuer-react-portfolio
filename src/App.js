import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {

  const categories = [
    'About' ,
    'Portfolio',
    'Contact',
    'Resume'
  ]

  const [currentCategory, setCurrentCategory ] = useState(categories[0])

  var category;
  if (currentCategory === 'About') {
    category = <About />
  }
  else if (currentCategory === "Portfolio") {
    category = <Portfolio />
  }
  else if (currentCategory === "Contact") {
    category = <Contact />
  }
  else {
    category = <Resume />
  }

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      />
     {category}
    </div>
  );
}

export default App;
