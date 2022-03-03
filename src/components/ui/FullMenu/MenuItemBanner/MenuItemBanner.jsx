import styles from "./MenuItemBanner.module.scss"
export const MenuItemBanner = ({item}) => {
  return <div className={styles.MenuItemBanner}>
    <h4>{item.title}</h4>
    <a href="#"><img src={item.banner} /></a>
  </div>
}