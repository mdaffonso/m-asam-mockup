import { MenuLink } from "@/components"
import styles from "./MenuItemList.module.scss"
export const MenuItemList = ({item}) => {
  return item ? <div className={styles.MenuItemList}>
    <h4>{item.title}</h4>
    <ul>
      {item.items && item.items.map(i => <li key={i.id}><MenuLink href={i.to}>{i.title}</MenuLink></li>)}
    </ul>
  </div> : null
}
