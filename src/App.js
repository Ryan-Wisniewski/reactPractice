import React from 'react';
import Nav from './Components/Nav'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'

function App() {
  const firstName = 'Ryan'
  return (
    <div className="App">
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
