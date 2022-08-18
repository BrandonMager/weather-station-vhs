import React from 'react';
import Navbar from './components/Navbar';
import Picture from './components/Picture';
import Footer from './components/Footer';
import Venice from "./components/Venice"

export default function App() {
  return (
    <main>
      <Navbar/>
      <Venice/>
      <Picture/> 
      <Footer/>
    </main>
  );
}


