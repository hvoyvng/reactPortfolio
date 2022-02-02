
import './App.css';
import AppHeader from './components/AppHeader'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SplashImage from './images/splash.jpeg'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Landing from './pages/Landing'
import Projects from './pages/ProjectsPage'
function App() {
  return (
    <Router>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/contact' element={<ContactPage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/projects' element={<Projects />} />
          </Routes>
        </Router>
  );
}

export default App;
