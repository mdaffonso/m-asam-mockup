import { useState } from "react"
import { useDidUpdate } from "@/hooks"
import styles from "./DrawerMenu.module.scss"
export const DrawerMenu = ({data, toggle, toggleClose, time = 200}) => {
  const [ animate, setAnimate ] = useState(false)
  const [ display, setDisplay ] = useState(toggle)

  const style = {
    animationDuration: `${time}ms`
  }

  useDidUpdate(() => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
      setDisplay(toggle)
    }, time)
  }, [toggle])

  return (
    <>
      <div className={styles.Backdrop} onClick={toggleClose} data-toggle={toggle} data-animate={animate} data-display={display} style={style}></div>
      <nav className={styles.DrawerMenu} data-toggle={toggle} data-animate={animate} data-display={display} style={style}>
        <div className={styles.MenuHeader}>
          <img src="https://www.asambeauty.com/static/media/headerSprite.2ed85dc6.svg#mobileMenuLogo" alt="M. Asam Kosmetik" />
          <button onClick={toggleClose}>schliessen</button>
        </div>

        <div className={styles.MenuBody}>
          <ul>

            { data && data.map(entry => (
              <li key={entry.id}><a href={entry.to}>{entry.title}</a></li>
            ))}

          </ul>
        </div>

        <div className={styles.MenuFooter}>
          <ul>
            <li>
              <a href="#">
                <span className="material-icons">person_outline</span>
                Kundenservice
              </a>
            </li>
            <li>
              <a href="#">
              <span className="material-icons">check</span>
                Häufige Fragen
              </a>
            </li>
          </ul>
          <a href="#">Anmelden</a>
        </div>
      </nav>
    </>
  )
}