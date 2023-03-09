import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { Route, Routes } from 'react-router';
import { Cards } from './data/cards';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage cards={Cards} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
