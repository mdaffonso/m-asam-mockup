import { Link } from "react-router-dom"
import styles from "./MenuLink.module.scss"
export const MenuLink = ({children, href, ...otherProps}) => <Link to={href} className={styles.MenuLink} {...otherProps} >{children}</Link>