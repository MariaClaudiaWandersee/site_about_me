import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, withRouter } from 'react-router-dom';
import Header from './header';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Footer from './footer';

function App() {
  return (
    <main className='container'>
      <Router>
        <Header/>
        <div className='container-geral'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre-maria-claudia" element={<About/>}/>
            <Route path="/contatos-de-maria" element={<Contact/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </main>
  );
}

export default App;
