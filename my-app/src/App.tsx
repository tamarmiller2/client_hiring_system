

import React from 'react';
import JobsPage from './pages/JobsPage';
import CandidatesPage from './pages/CandidatesPage';
import CreateJobPage from './pages/CreateJobPage';
import CreateCandidatePage from './pages/CreateCandidatePage';

import HomePage from './pages/HomePage';
// import CreateCandidatePage from './pages/CreateCandidatePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" Component={JobTable} /> */}
        {/* <Route path="/CandidateForm" Component={CandidateForm} /> */}
        <Route path="/jobsPage" element={<JobsPage />} />
        <Route path="/candidatesPage" element={<CandidatesPage />} />
        <Route path="/createJob" element={<CreateJobPage />} />
        <Route path="/createCandidate" element={<CreateCandidatePage />} />
        <Route path="/" element={<HomePage />} />

      </Routes>
    </Router>
  );
};


export default App;

