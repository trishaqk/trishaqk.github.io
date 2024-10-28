// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import Radio from './pages/Radio';
import Gigs from './pages/Gigs';
import AboutMe from './pages/AboutMe';
import MusicProjects from './pages/MusicProjects';

function App() {
  return (
    <Router>
      <div className="bg-black text-green-500 min-h-screen font-mono">
        <Navbar />

        <main className="pt-20 p-8">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/gigs" element={<Gigs />} />
            <Route path="/music-projects" element={<MusicProjects />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </main>

        <footer className="text-center p-4 bg-black text-green-500">
          {/* <p>🦶🏽 i am a footer 🦶🏽</p> */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
