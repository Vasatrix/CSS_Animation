import React, { useState } from 'react';
import './styles/global.css';
import AnimatedButton from './components/AnimatedButton';
import FlipCard from './components/FlipCard';
import Spinner from './components/Spinner';
import Modal from './components/Modal';
import FloatingElement from './components/FloatingElement';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container">
      <h1>🚀 Super Animated UI</h1>
      <FloatingElement><AnimatedButton /></FloatingElement>
      <FlipCard />
      <Spinner />
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <p></p>  
      <p></p>
      <footer className="footer">
        © {new Date().getFullYear()} Designed by Vasanth Kumar S
      </footer>
    </div>
  );
}

export default App;