import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import MainPage from './components/MainPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/:line" element={<MainPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;