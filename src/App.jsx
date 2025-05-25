import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Usuarios from './pages/Usuarios';
import { Navigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (

   <Router>
      <Routes>
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/" element={<Navigate to="/usuarios" />} />
        {/* otras rutas */}
      </Routes>
    </Router>
  );
}

export default App
