import { Container, FullMenu, DrawerMenu, HeaderIcon, SearchBox } from "@/components"
import { GlobalContext } from "@/contexts"
import { useWindowSize } from "@/hooks"
import styles from "./TheHeader.module.scss"
import { useState, useContext } from "react"
export const TheHeader = () => {
  const [ menuToggle, setMenuToggle ] = useState(false)
  const screen = useWindowSize()
  const { menu, specials } = useContext(GlobalContext)


  const toggleMenu = (force = null) => {
    if (typeof force !== "boolean") {
      setMenuToggle(curr => !curr)
    } else {
      setMenuToggle(force)
    }
  }

  return (
    <header className={styles.TheHeader}>
      <Container className={styles.TopContainer}>

        { screen.width < 1024 && <button className={styles.MenuToggle} onClick={toggleMenu}>
          <div></div><div></div><div></div>
        </button>}

        <div className={styles.Logo}><img src="https://www.asambeauty.com/static/media/headerSprite.2ed85dc6.svg#logo" alt="asambeauty du bist schön"/></div>

        <div className={styles.Icons}>
          { screen.width >= 1024 && <a href="#"><HeaderIcon materialIconCode="person_outline" subtitle="Anmelden" /></a>}
          <a href="#"><HeaderIcon materialIconCode="favorite_border" subtitle="Wunschzettel" /></a>
          <a href="#"><HeaderIcon materialClassName="material-icons-outlined" materialIconCode="local_mall" subtitle="Warenkorb" showCounter={true} counterValue={0} /></a>
        </div>
      </Container>

      <Container className={styles.BottomContainer}>
        <div className={styles.SearchBoxWrapper}>
          {
            screen.width < 1024
              ? <DrawerMenu toggle={menuToggle} toggleClose={() => toggleMenu(false)} data={menu} />
              : <FullMenu data={menu} specials={specials} />
          }

          <SearchBox />
        </div>
      </Container>
    </header>
  )
}