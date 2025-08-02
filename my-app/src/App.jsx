import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ChatBox from './components/ChatBox';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatBox />} />
        </Routes>
    </BrowserRouter>
  
  );
}

export default App
