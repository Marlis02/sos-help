import styles from './mapchs.module.scss'
import opolMap from '/opol-map.png'
import selMap from '/sel-map.png'
const Mapchs = () => {
  return (
    <div className={styles.con}>
      <h2>Оползни</h2>
      <img src={opolMap} alt="opolMap" />
      <h2>Сели</h2>
      <img src={selMap} alt="selMap" />
    </div>
  )
}

export default Mapchs
