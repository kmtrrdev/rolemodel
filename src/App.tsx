import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Linkedin, Shield } from 'lucide-react';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="fixed w-full bg-black/20 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold">Ibrahim Hegazy</h1>
            </div>
            <p className="text-blue-400 mt-2 md:mt-0">Ethical Hacker | Security Researcher | Pentester</p>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                {['Home', 'About', 'Achievements', 'Contact', 'Gallery'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => navigate(`/${item.toLowerCase()}`)}
                      className={`hover:text-blue-400 transition-colors duration-300 ${
                        location.pathname === `/${item.toLowerCase()}` ? 'text-blue-400' : ''
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 px-4">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="mb-6">For more about Ibrahim Hegazy</p>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/Zigoo.eg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ebrahimhegazy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;