import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { FormPage } from './pages/FormPage/FormPage';
import { Navigate, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Provider>
  );
};

export default App;
