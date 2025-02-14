import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className='min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white'>
          <Navbar />
          <Routes>
            <Route path='/:language' element={<Home />} />;
            <Route path='/:language/about' element={<About />} />
            <Route path='/:language/portfolio' element={<Portfolio />} />
            <Route path='/:language/experience' element={<Experience />} />
            <Route path='/:language/contact' element={<Contact />} />
            <Route path='/' element={<Navigate replace to='/en' />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
