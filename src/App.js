import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import './App.css'

function App() {

  const [categories] = useState([
    {name: 'About me'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'resume'}
  ])

  const [currentCategory, setCurrentCategory ] = useState(categories[0])

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      />
      <main>
        <Portfolio/>
        <About></About>
      </main>
    </div>
  );
}

export default App;
