import { Link } from "react-router-dom"
import styles from "./MenuButtons.module.scss"
export const MenuButtons = ({data, mouseEnter, mouseLeave, hoverItemId, menuContent}) => {

  return <ul className={styles.MenuButtons}>
    {data.length && data.map(entry => (
      <li key={entry.id}>
        <Link id={entry.id} 
          onMouseEnter={mouseEnter} 
          onMouseLeave={mouseLeave} 
          data-hover={hoverItemId === entry.id} 
          data-bubblediamond={!!menuContent.columns} 
          data-items={JSON.stringify(entry)} 
          to="/">
            
            {entry.title}

        </Link>
      </li>
    ))}
  </ul>
}
