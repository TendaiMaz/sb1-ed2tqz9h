import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CoreBusinessPage from './pages/CoreBusinessPage';
import MissionPage from './pages/MissionPage';
import CoreValuesPage from './pages/CoreValuesPage';
import DirectorsPage from './pages/DirectorsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="core-business" element={<CoreBusinessPage />} />
        <Route path="mission" element={<MissionPage />} />
        <Route path="core-values" element={<CoreValuesPage />} />
        <Route path="directors" element={<DirectorsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;