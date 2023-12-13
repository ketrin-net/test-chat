import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import PageChat from './components/PageChat/PageChat';

function App() {
  return (
    <>
      <Header />
      <div id='main'>
        <Navbar />
        <PageChat />
      </div>
    </>
  );
}

export default App;
