import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { FormPage } from './pages/FormPage/FormPage';
import { Navigate, Route, Routes } from 'react-router';
import { Cards } from './data/cards';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage cards={Cards} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;
