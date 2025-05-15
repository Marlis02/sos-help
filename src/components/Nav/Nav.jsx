// components/Navbar.jsx
import { NavLink } from 'react-router-dom'
import styles from './nav.module.scss'
import { useEffect, useState } from 'react'

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false)
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
        <img
          className={styles.logo_img}
          src="https://www.adobe.com/uk/creativecloud/design/discover/media_17770be5de64c9b159b23a7da870ae0bd5bc0f400.jpeg?width=1200&format=pjpg&optimize=medium"
          alt="logo"
        />
        <div className={styles.links_con}>
          <NavLink className={styles.link} to="/">
            Главная
          </NavLink>
          <NavLink className={styles.link} to="/regions">
            Регионы
          </NavLink>
          <NavLink className={styles.link} to="/contacts">
            Контакты
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav
