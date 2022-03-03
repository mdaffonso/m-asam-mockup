import { Link } from "react-router-dom"
import styles from "./Breadcrumbs.module.scss"
export const Breadcrumbs = ({children}) => {
  return (
    <div className={styles.Breadcrumbs}>
      <Link to="/">Startseite</Link>
      {children}
    </div>
  )
}