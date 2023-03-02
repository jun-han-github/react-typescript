import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <HomePage /> } />
        <Route path="/overview" element={ <div>Overview</div> } />
        <Route path="/history" element={ <div>History</div> } />
      </Route>
    </Routes>
  );
}

export default App;
