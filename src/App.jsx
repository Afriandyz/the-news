import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepages from './pages/Homepages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepages />} />
    </Routes>
  )
}

export default App