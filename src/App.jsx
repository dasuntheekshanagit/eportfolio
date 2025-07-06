import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllProjectsPage from './pages/AllProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AllAchievementsPage from './pages/AllAchievementsPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/achievements" element={<AllAchievementsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

