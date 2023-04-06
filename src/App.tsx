import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { FormPage } from './pages/FormPage/FormPage';
import { Navigate, Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';

const App = () => {
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(async (res) => await res.json())
      .then(
        (result) => {
          setIsLoaded(false);
          setCards(result.results);
        },
        (error) => {
          setIsLoaded(true);
          console.log(error);
          // setError(error);
        }
      );
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cards={cards} loaded={isLoaded} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default App;
