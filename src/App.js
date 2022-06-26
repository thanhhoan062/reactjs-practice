import React from 'react';
import './style.css';
import Navbar from './common/Navbar';
import Home from './common/Home';
import Sidebar from './common/Sidebar';
import Submenu from './common/Submenu';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sidebar />
      <Submenu />
    </>
  );
}
export default App;
