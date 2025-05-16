import React, { useEffect, useState } from 'react'
import styles from './region.module.scss'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const Regions = () => {
  const location = useLocation()

  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <div className={styles.con} onClick={() => setSidebarOpen(false)}>
      <button
        className={styles.menu}
        onClick={(e) => {
          e.stopPropagation() // <== важно!
          setSidebarOpen(true)
        }}
      >
        ☰ Меню
      </button>
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}
      >
        <h2>Регионы</h2>
        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="chuy"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Чуйская область
        </NavLink>
        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="osh"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Ошская область
        </NavLink>
        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="naryn"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Нарынская область
        </NavLink>
        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="issykkul"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Иссык-Кульская область
        </NavLink>
        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="jalalabad"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Джалал-Абадская область
        </NavLink>
        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="talas"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Талаская область
        </NavLink>
        <NavLink
          onClick={() => setSidebarOpen(false)}
          to="batken"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Баткенская область
        </NavLink>
      </aside>
      <section className={styles.content}>
        <Outlet />
      </section>
    </div>
  )
}

export default Regions
