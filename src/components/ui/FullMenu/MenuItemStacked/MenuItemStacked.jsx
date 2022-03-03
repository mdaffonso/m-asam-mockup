import { MenuLink } from "@/components"
import styles from "./MenuItemStacked.module.scss"

export const MenuItemStacked = ({item}) => {
  return item ? <div key={item.id} className={styles.MenuItemStacked}>
    <h4>{item.title}</h4>
    <ul>
      {item.items && item.items.map(i => (
        <li key={i.id}>
          <MenuLink href={i.to}>
            {i.title}
          </MenuLink>
        </li>
      ))}
    </ul>
  </div> : null
}
