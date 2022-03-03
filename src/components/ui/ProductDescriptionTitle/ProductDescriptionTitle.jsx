import styles from "./ProductDescriptionTitle.module.scss"

export const ProductDescriptionTitle = ({children}) => <div className={styles.TitleWrapper}><h3>{children}</h3></div>