// components/Navbar.jsx
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './nav.module.scss'
import { useEffect, useState } from 'react'
import logo from '/logo.png'

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={`${styles.con} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.block}>
        <img className={styles.logo_img} src={logo} alt="logo" onClick={() => navigate('/')} />
        <div className={styles.links_con}>
          <NavLink
            to="/"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            Главная
          </NavLink>
          <NavLink
            to="/regions"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            Регионы
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            Контакты
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav
