import React from 'react'
import styles from './region.module.scss'
import { Link, Outlet } from 'react-router-dom'

const Regions = () => {
  return (
    <div className={styles.con}>
      <aside className={styles.sidebar}>
        <h2>Регионы</h2>
        <Link to="chuy">Чуй</Link>
        <Link to="osh">Ош</Link>
      </aside>
      <section className={styles.content}>
        <Outlet />
      </section>
    </div>
  )
}

export default Regions
