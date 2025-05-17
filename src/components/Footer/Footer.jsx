import React from 'react'
import styles from './footer.module.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_left}>
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
            to="/map-chs"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            Карты ЧС
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            Контакты
          </NavLink>
        </div>

        <div className={styles.sos_icons}>
          <img src="/icons/whatsapp.svg" alt="vector" width={24} height={24} />

          <img src="/icons/telegram.svg" alt="vector" width={20} height={20} />

          <img src="/icons/instagram.svg" alt="vector" width={24} height={24} />

          <img src="/icons/facebook.svg" alt="vector" width={24} height={24} />
        </div>
      </footer>
      <div className={styles.footer_end}>
        <p className={styles.copy}>&copy;2025 Информационный портал. Все права защищены.</p>
      </div>
    </>
  )
}

export default Footer
