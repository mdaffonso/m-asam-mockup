import { MenuButtons, MenuSpecials, MenuItemBanner, MenuItemStacked, MenuItemList } from "@/components"
import { useEffect, useRef, useState } from "react"
import styles from "./FullMenu.module.scss"
export const FullMenu = ({data, specials}) => {
  const menuRef = useRef(null)
  const [ menuContent, setMenuContent ] = useState({})
  const [ currentHover, setCurrentHover ] = useState(0)
  const [ hoverItemId, setHoverItemId ] = useState("")

  const setHover = (action) => {
    return (e) => {
      const object = e.target
      const dataItems = JSON.parse(object.getAttribute("data-items"))
      
      if (action === "enter") {
        setCurrentHover(curr => curr + 1)
        setHoverItemId(object.id)
      } else {
        setCurrentHover(curr => curr - 1)
      }
  
      setMenuContent(dataItems)
    }
  }

  useEffect(() => {
    if (currentHover === 0) {
      setHoverItemId("")
    }
  }, [currentHover, setHoverItemId])

  return (
    <nav className={styles.FullMenu}>
      <MenuButtons data={data} mouseEnter={setHover("enter")} mouseLeave={setHover("leave")} hoverItemId={hoverItemId} menuContent={menuContent} />

      {menuContent.columns && <div className={styles.HoverMenu} ref={menuRef} onMouseEnter={() => setCurrentHover(curr => curr+1)} onMouseLeave={() => setCurrentHover(curr => curr-1)} data-hover={currentHover > 0}>
        {menuContent.columns.map(entry => (
          <div key={entry.id}>
            {
              entry.items && !entry.divide 
                ? <MenuItemList item={entry} />
                : entry.banner
                ? <MenuItemBanner item={entry} />
                : entry.divide && entry.items
                ? entry.items.map(item => <MenuItemStacked key={item.id} item={item} />)
                : null
            }
          </div>
        ))}
        { 
          menuContent.showSpecials && <MenuSpecials specials={specials} />
        }
      </div>}
    </nav>
  )
}
