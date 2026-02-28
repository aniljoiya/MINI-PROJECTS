import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'
import Developer from './components/Developer';
import Footer from './components/Footer';

const App = () => {

  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar category={category} setCategory={setCategory} />
      <NewsBoard category={category} />
      <Developer />
      <Footer />
    </>
  )
}

export default App
