import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contacts from './pages/Contacts/Contacts'
import Regions from './pages/Region/Region'
import Chuy from './pages/Regions/Chuy'
import Osh from './pages/Regions/Osh'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/regions" element={<Regions />}>
        {/* Редирект при заходе на /regions */}
        <Route index element={<Navigate to="chuy" replace />} />
        <Route path="chuy" element={<Chuy />} />
        <Route path="osh" element={<Osh />} />
      </Route>
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  )
}

export default Routing
