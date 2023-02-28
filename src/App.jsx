import { useState } from 'react'
import './App.css'
import FormPage from './Pages/FormPage'
import ClockPage from './Pages/ClockPage'
import NotFound from './Pages/NotFound'
import Layout from './Components/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<FormPage />} />
            <Route path="clock" element={<ClockPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
