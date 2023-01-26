import logo from './logo.svg';
import React from 'react';
import './App.css';
import header from './header';
import Header from './header';

function App() {
  return (
    <main className="container">
        <Header/>
        <div>
          <Routes>
            <Route path="/" element={Home}/>
          </Routes>
        </div>
    </main>
  );
}

export default App;
