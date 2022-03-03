import { MenuLink } from "@/components"
import styles from "./MenuSpecials.module.scss"
export const MenuSpecials = ({specials}) => {
  return <div className={styles.Specials}>
    <h4>Specials</h4>
    <ul>
      {specials.map(special => (
        <li key={special.id}><MenuLink href={special.to}><img src={special.icon} />{special.title}</MenuLink></li>
      ))}
    </ul>
  </div>
}