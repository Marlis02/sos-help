import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contacts from './pages/Contacts/Contacts'
import Regions from './pages/Region/Region'
import Chuy from './pages/Regions/Chuy'
import Osh from './pages/Regions/Osh'
import Naryn from './pages/Regions/Naryn'
import Issykkul from './pages/Regions/Issykkul'
import Jalalabad from './pages/Regions/Jalalabad'
import Batken from './pages/Regions/Batken'
import Talas from './pages/Regions/Talas'
import Mapchs from './pages/Mapchs/Mapchs'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/regions" element={<Regions />}>
        <Route index element={<Navigate to="osh" replace />} />
        <Route path="chuy" element={<Chuy />} />
        <Route path="osh" element={<Osh />} />
        <Route path="naryn" element={<Naryn />} />
        <Route path="issykkul" element={<Issykkul />} />
        <Route path="jalalabad" element={<Jalalabad />} />
        <Route path="batken" element={<Batken />} />
        <Route path="talas" element={<Talas />} />
      </Route>
      <Route path="/map-chs" element={<Mapchs />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  )
}

export default Routing
