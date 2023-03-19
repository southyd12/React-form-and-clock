import { useState } from 'react'
import './App.css'
import FormPage from './Pages/FormPage'
import ClockPage from './Pages/ClockPage'
import CarsList from './Pages/CarsList'
import NotFound from './Pages/NotFound'
import Layout from './Components/Layout'
import { CarsProvider } from './Components/contexts/cars.context'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <CarsProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<FormPage />} />
              <Route path="clock" element={<ClockPage />} />
              <Route path="cars" element={<CarsList />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CarsProvider>
      </Router>
    </div>
  )
}

export default App
