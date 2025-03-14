import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import HomeScreen from './components/pages/HomeScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;