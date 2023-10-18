import Header from './components/Header';
import Home from './components/Home';
import { useState, useEffect } from 'react';

const App = () => {

  const [key, setKey] = useState("");
  

  return (
    <>
    <Header />
    <Home />
    </>

  )
}

export default App